import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Json } from '../providers/json'

/*
  Generated class for the Login provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LoginProvider {
  isLoggedin: boolean;
  AuthToken;
  constructor(public http: Http, public json: Json) {
    console.log('Hello Login Provider');
    this.isLoggedin = false;
    this.AuthToken = null;
  }
  storeUserCredentials(token) {
    window.localStorage.setItem('user_order', token);
    this.useCredentials(token);
    
}

useCredentials(token) {
    this.isLoggedin = true;
    this.AuthToken = token;
}

loadUserCredentials() {
    var token = window.localStorage.getItem('user_order');
    this.useCredentials(token);
}

destroyUserCredentials() {
    this.isLoggedin = false;
    this.AuthToken = null;
    window.localStorage.clear();
}

authenticate(user) {
    let creds = {
      username: user.value.name,
      password: user.value.password
  }
    var headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    
    return new Promise(resolve => {
        this.http.post('http://localhost:8000/api/auth/token/', JSON.stringify(creds), {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
            console.log(data)
            console.log(data.token)
            if(data.token){
                console.log('consegui')
                this.storeUserCredentials(data.token);
                resolve(true);
            }
            else{
                console.log('deu ruim')
                resolve(false);
            }
        }, error => {
            console.log(error);
            resolve(false);
        });
    });
}

adduser(user) {
    let creds = {
        username: user.name,
        password: user.password,
        email: user.email,
        is_active: true
    }
    var headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    
    return new Promise(resolve => {
        this.http.post('http://localhost:8000/api/usuarios/add/', JSON.stringify(creds), {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
            console.log(data['_body']);
            resolve(true);
           }, error => {
            console.log(error);
            resolve(false);
        });
    });
}

getinfo() {
    return new Promise(resolve => {
        var headers = new Headers();
        this.loadUserCredentials();
        console.log(this.AuthToken);
        headers.append('Authorization', 'Bearer ' +this.AuthToken);
        this.http.get('http://localhost:3333/getinfo', {headers: headers}).subscribe(data => {
            if(data.json().success)
                resolve(data.json());
            else
                resolve(false);
        });
    })
}

logout() {
    this.destroyUserCredentials();
}

}
