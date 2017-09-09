import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { LoginProvider } from '../providers/loginprovider'

@Injectable()
export class Json {
  data: any;
  base_url = 'http://localhost:8000/api';
  constructor(public http: Http, public lp: LoginProvider) {
    console.log('Hello rapaze');
  }
  
  getCategoriaData(){
      var headers = new Headers();
      headers.append('Authorization','JWT ' +this.lp.getCredentials());
      return this.http.get(this.base_url+'/categoria/?format=json', {headers: headers})
      .map(res => res.json())
  }

  alterarCategoria(data){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    headers.append('Authorization','JWT ' +this.lp.getCredentials());

    return this.http.put(this.base_url+'/categoria/'+data.id+'/', data, {headers: headers})
    .map(res => res.json())
    .subscribe(data => {
      console.log(data['_body']);
      }, error => {
      console.log(error);
    });
  }
/*
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
*/
}
