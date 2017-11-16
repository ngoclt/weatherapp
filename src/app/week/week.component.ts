import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { AppService } from '../app.service';

@Component({
  selector: 'app-week',
  providers: [AppService],
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WeekComponent implements OnInit {

  weathers: any;
  errorMessage: string;

  constructor(private service: AppService) { }

  ngOnInit() {
    this.fetch();
  }

  fetch() {
    this.service.request('weather/last7days', null)
    .subscribe(
      result => {
        this.weathers = []
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        if (result.data != null) {
          for (let record of result.data) {
            let date = new Date(record.date_time);
            let dateString = date.toLocaleDateString("en-US", options);
            let arr = dateString.split(",");
            let weather = {
              day: arr[0],
              month: arr[1],
              year: arr[2],
              temperature: record.temperature,
              humidity: record.humidity,
            }
            this.weathers.push(weather);
          }
        }
      },
      error => {
        this.errorMessage = error;
      }
    );
  }
}
