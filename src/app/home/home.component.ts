import { Component, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';

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

  gaugeConfiguration = {
    animation: {easing: 'out'},
    width: 150, height: 150,
    greenFrom: 0, greenTo: 20,
    minorTicks: 7,
    min: -30, max: 30,
    majorTicks: ['-30', '-20', '-10', '0', '10', '20', '30'],
    greenColor: '#d0e9c6'
  };

  gauge = {
    chartType: 'Gauge',
    dataTable: [
      ['Label', 'Temperature'],
      ['Value', 0]
    ],
    options: this.gaugeConfiguration
  };

  @ViewChild('ggChart') ggChart;

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

          this.gauge = {
            chartType: 'Gauge',
            dataTable: [
              ['Label', 'Temperature'],
              ['Value', this.weather.temperature]
            ],
            options: this.gaugeConfiguration
          };
          
          if (this.ggChart != null) {
            this.ggChart.redraw();
          }
        }
      },
      error => {
        this.errorMessage = error;
      }
    );
  }
}
