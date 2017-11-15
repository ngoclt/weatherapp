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
    this.fetchWeatherInfo();
  }

  fetchWeatherInfo() {
      this.service.getWeatherInformation('weather', {
        limit: 1
      })
      .subscribe(
        result => {
          if (result.data.length > 0) {
            this.weather = result.data[0];
          }
        },
        error => {
          this.errorMessage = error;
        }
      );
    }
}
