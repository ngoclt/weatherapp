import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HttpModule } from "@angular/http";
import { AgmCoreModule } from '@agm/core';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { AppComponent } from './app.component';
import { APP_CONFIG, AppConfig } from './app.config';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { DayComponent } from './day/day.component';
import { WeekComponent } from './week/week.component';
import { MapComponent } from './map/map.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'day',
    component: DayComponent
  },
  {
    path: 'week',
    component: WeekComponent
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
    DayComponent,
    WeekComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Ng2GoogleChartsModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({ 
      apiKey: 'AIzaSyCkFYA8ZwTfPE5Jb3eOiISvaVjniuXhcRc'
    }),
  ],
  providers: [{ provide: APP_CONFIG, useValue: AppConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }
