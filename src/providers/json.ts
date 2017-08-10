import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
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
    return this.http.get('http://localhost:8000/api/usuarios/?format=json').map(res => res.json());
  }

  getUsuariosData(){
    return this.http.get('http://localhost:8000/api/usuarios/?format=json').map(res => res.json());
  }

  postRequest() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json' );
 
    let postParams = {
        id: 2,
        name: "tes",
        adress: "tes",
        city: "tes",
        cep: "tes",
        phone: "tes",
        mobile: "tes"
    }
    
    this.http.post("http://localhost:8000/api/usuarios/", JSON.stringify(postParams), {headers: headers})
      .map(res => res.json())
      .subscribe(data => {
        console.log(data['_body']);
       }, error => {
        console.log(error);
      });
  }

}
