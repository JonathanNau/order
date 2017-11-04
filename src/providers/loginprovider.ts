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
  id;
  loja; //salvar código da loja quando usuário for do tipo loja
  nome_loja;
  telefone_loja;
  latitude_loja;
  longitude_loja;
  situação_loja;
  email;
  senha;
  constructor(public http: Http, public menu: MenuController) {
    console.log('Serviço Login Provider criado!');
    this.isLoggedin = false;
    this.AuthToken = null;
    this.codigo = 0;
    this.id = 0;
    this.loja = 0;
    this.nome_loja='';
    this.telefone_loja=0;
    this.latitude_loja=0;
    this.longitude_loja=0;
    this.situação_loja=false;
    this.email='';
    this.senha='';
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
    console.log('salvo id='+ user.id + ', codigo=' + user.codigo);
    this.id = user.id
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

loadDadosLoja(data){
    var headers = new Headers();
    headers.append('Authorization','JWT ' +this.AuthToken);
    return new Promise(resolve => {
        this.http.get('http://localhost:8000/api/lojausuario/'+this.id+'/', {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
            if (data){
                console.log('Código da loja salvo, código = ' + data.loja.id);
                this.loja = data.loja.id;
                this.nome_loja=data.loja.nome;
                this.telefone_loja=data.loja.telefone;
                this.latitude_loja=data.loja.latitude;
                this.longitude_loja=data.loja.longitude;
                this.situação_loja=data.loja.situacao;
                this.email=data.usuario.email;
                this.senha=data.usuario.password;
                
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
            if(data.token){
                console.log('TOKEN obtido!')
                this.storeUserCredentials(data.token);
                this.loadDadosUser(creds,data).then(data => {
                    if(data){
                        console.log(this.codigo);
                        if (this.codigo == 1){
                            this.loadDadosLoja(data);
                        }
                        resolve(true);
                    } else {
                        console.log("Problema ao ler dados do Usuário");
                        resolve(true);
                    }
                  });
                
            }
            else{
                console.log('Problema ao efetuar login')
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
        console.log('Verificar validade do token');
        var headers = new Headers();
        this.loadUserCredentials();
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
