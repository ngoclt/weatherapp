import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { AppService } from '../app.service';

@Component({
  selector: 'app-history',
  providers: [AppService],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HistoryComponent implements OnInit {

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
        if (result.data != null) {
          for (let record of result.data) {
            let weather = {
              date_time: new Date(record.date_time),
              temperature: Math.ceil(record.temperature),
              humidity: Math.ceil(record.humidity),
              light: Math.ceil(record.light),
              rain: Math.ceil(record.rain) === -100 ? 'NA' : Math.ceil(record.rain),
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
