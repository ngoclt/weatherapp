import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  providers: [AppService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  weather: any;
  errorMessage: string;

  constructor(private service: AppService) { }

  ngOnInit() {
    this.fetch();
  }

  fetch() {
    this.service.request('weather/latest', null)
    .subscribe(
      result => {
        if (result.data != null) {
          this.weather = {
            temperature: Math.ceil(result.data.temperature),
            humidity: Math.ceil(result.data.humidity_out),
            pressure: Math.ceil(result.data.pressure)
          };
        }
      },
      error => {
        this.errorMessage = error;
      }
    );
  }
}
