import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule  } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent }  from './app.component';
import { HomeComponent }      from './Home/home';

@NgModule({
  imports: [ BrowserModule, RouterModule, HttpModule, JsonpModule, routing],
  declarations: [ AppComponent, HomeComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
