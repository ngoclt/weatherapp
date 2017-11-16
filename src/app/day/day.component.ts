import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { AppService } from '../app.service';

@Component({
  selector: 'app-day',
  providers: [AppService],
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DayComponent implements OnInit {

  weathers: any;
  errorMessage: string;

  constructor(private service: AppService) { }

  ngOnInit() {
    this.fetch();
  }

  fetch() {
    this.service.request('weather/last24hours', null)
    .subscribe(
      result => {
        this.weathers = []
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric' };
        if (result.data != null) {
          for (let record of result.data) {
            let date = new Date(record.date_time);
            let dateString = date.toLocaleDateString("en-US", options);
            let weather = {
              date_time: dateString,
              temperature: record.temperature,
              humidity: record.humidity,
              light: record.light,
              rain: record.rain === -100 ? 'NA' : record.rain,
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
