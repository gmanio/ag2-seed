import {Component} from '@angular/core';
import {Injectable}     from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {Observable}     from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html'
})

@Injectable()
export class AppComponent {
  public constructor(private http: Http) {
    if (!navigator.geolocation) {
      console.log('this browser does not support geo location.');
    } else {
      this.sendGeoLocation();
    }
  }

  sendGeoLocation() {

    let geo_options = {
      enableHighAccuracy: true,
      maximumAge: 30000,
      timeout: 27000
    };

    let wpId = navigator.geolocation.watchPosition(this._geo_success, this._geo_error, geo_options);
  }

  _geo_success(position: any) {
    let body = JSON.stringify({'latitude': position.coords.latitude, 'longitude': position.coords.longitude});
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.post('http://gman.io:3000/gps', body, options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  private _geo_error(e:any){
    console.log(e);
  }

  private handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || ' error');
  }
}
