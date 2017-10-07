import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Json } from '../providers/json'
import { MenuController } from 'ionic-angular';

/*
  Generated class for the Login provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LoginProvider {
  isLoggedin: boolean;
  AuthToken;
  codigo;
  constructor(public http: Http, public menu: MenuController) {
    console.log('Hello Login Provider');
    this.isLoggedin = false;
    this.AuthToken = null;
    this.codigo = 0;
  }
  storeUserCredentials(token) {
    window.localStorage.setItem('user_order_token', token);
    this.useCredentials(token);
    
}

useCredentials(token) {
    this.isLoggedin = true;
    this.AuthToken = token;
}

loadUserCredentials() {
    var token = window.localStorage.getItem('user_order_token');
    this.useCredentials(token);
}

getCredentials() {
    var token = window.localStorage.getItem('user_order_token');
    return token;
}

destroyUserCredentials() {
    this.isLoggedin = false;
    this.AuthToken = null;
    this.codigo = 0;
    window.localStorage.clear();
}

salvaUser(user){
    window.localStorage.setItem('user_order_id', user.id);
    window.localStorage.setItem('user_order_cod', user.codigo);
    this.codigo = user.codigo
}

loadDadosUser(creds, data){
    var headers = new Headers();
    headers.append('Authorization','JWT ' +data.token);
    return new Promise(resolve => {
        this.http.get('http://localhost:8000/api/usuarios/', {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
            for(var i = 0; i < data.length; i++) {
                if (data[i].username == creds.username){
                    this.salvaUser(data[i]);
                    resolve(true);
                }
            }
        }, error => {
            console.log(error);
            resolve(false);
        });
    })
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
                this.loadDadosUser(creds,data).then(data => {
                    if(data){
                        console.log(this.codigo);
                        resolve(true);
                    } else {
                        console.log("Problema ao ler dados do Usuário");
                        resolve(true);
                    }
                  });
                
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
        let creds = {
            token: this.AuthToken
        }
        headers.append('Content-Type', 'application/json' );
        //headers.append('Authorization', 'Bearer ' +this.AuthToken);
        this.http.post('http://localhost:8000/api/api-token-verify/', JSON.stringify(creds), {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
            console.log(data['_body']);
            resolve(true);
           }, error => {
            console.log(error);
            resolve(false);
        });
    })
}

logout() {
    this.menu.enable(false, this.menu.getOpen().id);
    this.destroyUserCredentials();
}

}
