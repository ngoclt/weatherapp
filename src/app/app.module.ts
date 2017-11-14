import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { APP_CONFIG, AppConfig } from './app.config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{ provide: APP_CONFIG, useValue: AppConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }
