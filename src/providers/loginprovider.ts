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
        window.localStorage.setItem('raja', token);
        this.useCredentials(token); 
  }

  useCredentials(token) {
        this.isLoggedin = true;
        this.AuthToken = token;
}

  loadUserCredentials() {
    var token = window.localStorage.getItem('raja');
    this.useCredentials(token);
  }

  login(user) {
    return new Promise(resolve => {
      this.json.getData().subscribe(data => {
        for(var i = 0; i < data.length; i++) {
          if (user.name == data[i].nome && user.password == data[i].senha ){
            console.log('Login com sucesso')
            this.storeUserCredentials(data[i].nome);
            resolve(true);
          }
        }
        resolve(false);
      });
      console.log(user)
    });
  }

  getinfo() {
    return new Promise(resolve => {
        this.loadUserCredentials();
        console.log(this.AuthToken);
        if(1+1==2)
            resolve(true);
        else
            resolve(false);
    });
  }

  adduser(user) {
    var displayDate = new Date().toLocaleDateString().split('/');
    var dData = displayDate[2]+'-'+displayDate[1]+'-'+displayDate[0]
    let headers = new Headers();
    headers.append('Content-Type', 'application/json' );
 
    let postParams = {
        nome: user.name,
        email: user.email,
        senha: user.password,
        data: dData,
        situacao: true
    }
    return new Promise(resolve => {
    this.http.post("http://localhost:8000/api/usuarios/", JSON.stringify(postParams), {headers: headers})
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

  authenticate(user) {
        var creds = "name=" + user.name + "&password=" + user.password;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        
        return new Promise(resolve => {
            this.http.post('http://localhost:3333/authenticate', creds, {headers: headers}).subscribe(data => {
                if(data.json().success){
                    this.storeUserCredentials(data.json().token);
                    resolve(true);
                }
                else
                    resolve(false);
            });
        });
  }

}
