import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Json provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class Json {
  data: any;
  constructor(public http: Http) {
    console.log('Hello rapaze');
  }

  getData(){
    return this.http.get('http://localhost:8000/api/portfolios/?format=json').map(res => res.json());
  }

}
