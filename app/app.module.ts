import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { APP_BASE_HREF } from '@angular/common';
import { AppComponent }  from './app.component';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { HomeComponent } from './Home/home';

@NgModule({
  imports: [ BrowserModule, RouterModule, HttpModule, routing],
  declarations: [ AppComponent, HomeComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
