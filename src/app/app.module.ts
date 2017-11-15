import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HttpModule } from "@angular/http";
import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';
import { APP_CONFIG, AppConfig } from './app.config';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { HistoryComponent } from './history/history.component';
import { WindspeedComponent } from './windspeed/windspeed.component';
import { HumidityComponent } from './humidity/humidity.component';
import { MapComponent } from './map/map.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'windspeed',
    component: WindspeedComponent
  },
  {
    path: 'humidity',
    component: HumidityComponent
    },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    HistoryComponent,
    WindspeedComponent,
    HumidityComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({ 
      apiKey: 'AIzaSyCkFYA8ZwTfPE5Jb3eOiISvaVjniuXhcRc'
    }),
  ],
  providers: [{ provide: APP_CONFIG, useValue: AppConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }
