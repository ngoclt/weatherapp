import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MapComponent implements OnInit {

  lat = 61.503820;
  lng = 23.808746;
  zoom = 13;
  labelOptions = {
    color: '#000000',
    fontFamily: '',
    fontSize: '14px',
    fontWeight: 'bold',
    text: 'TAMK',
    marginBottom: '20px',
  };

  constructor() { }

  ngOnInit() {
  }

}
