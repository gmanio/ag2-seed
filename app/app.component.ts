import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Injectable }     from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class AppComponent {
  public constructor(private http: Http){
    if (!navigator.geolocation) {
      console.log('this browser does not support geo location.');
    } else {
      this.sendGeoLocation();
    }
  }

  sendGeoLocation(){

    let geo_options = {
      enableHighAccuracy: true,
      maximumAge: 30000,
      timeout: 27000
    };

    let wpId = navigator.geolocation.watchPosition(this._geo_success, this._geo_error, geo_options);
  }
  _geo_success(position:any){
>>>>>>> 0039dcb44b521798190b20934c2a0fada58f6af1
    let body = JSON.stringify({'latitude': position.coords.latitude, 'longitude': position.coords.longitude});
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post('http://gman.io:3000/gps', body, options);
  }

  _geo_error(error:any){
    console.log('ERROR(' + error.code + '): ' + error.message);
  }
}
