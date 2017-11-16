import { Component, ViewChild, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { AgmMap } from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MapComponent implements OnInit {

  lat = 61.505800;
  lng = 23.817760;
  zoom = 13;
  labelOptions = {
    color: '#000000',
    fontFamily: '',
    fontSize: '14px',
    fontWeight: 'bold',
    text: "TAMK",
  };

  @ViewChild(AgmMap) myMap: any;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.myMap.triggerResize()
      .then(() =>  this.myMap._mapsWrapper.setCenter({lat: this.lat, lng: this.lng}));
  }
}
