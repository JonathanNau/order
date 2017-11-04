import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { LoginProvider } from '../providers/loginprovider'
import { Carrinho } from '../providers/carrinho'

@Injectable()
export class Json {
  data: any;
  base_url = 'http://localhost:8000/api';
  constructor(public http: Http, public lp: LoginProvider, public carrinho: Carrinho) {
    console.log('Classe JSON criada');
  }

  getDadosLoja(){
    var headers = new Headers();
    headers.append('Authorization','JWT ' +this.lp.getCredentials());
    return new Promise(resolve => {
      this.http.get(this.base_url+'/usuarios/'+this.lp.id+'/', {headers: headers})
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      });
    });
  }

  getRecebimentos(){
    console.log('Get recebimentos');
    var headers = new Headers();
    headers.append('Authorization','JWT ' +this.lp.getCredentials());
    return this.http.get(this.base_url+'/recebimento/'+this.carrinho.loja.loja_data.id+'/', {headers: headers})
    .map(res => res.json())
  }

  getCategoriaClientesData(){
    var headers = new Headers();
    headers.append('Authorization','JWT ' +this.lp.getCredentials());
    return this.http.get(this.base_url+'/categoria/'+this.carrinho.loja.loja_data.id+'/', {headers: headers})
    .map(res => res.json())
  }

  getProdutosClienteData(id_categoria){
    var headers = new Headers();
    headers.append('Authorization','JWT ' +this.lp.getCredentials());
    return this.http.get(this.base_url+'/produto-categoria/'+id_categoria+'/', {headers: headers})
    .map(res => res.json())
  }
  getCategoriaData(){
      var headers = new Headers();
      headers.append('Authorization','JWT ' +this.lp.getCredentials());
      return this.http.get(this.base_url+'/categoria/'+this.lp.loja+'/', {headers: headers})
      .map(res => res.json())
  }

  getFuncionariosData(){
    var headers = new Headers();
    headers.append('Authorization','JWT ' +this.lp.getCredentials());
    return this.http.get(this.base_url+'/funcionarios/'+this.lp.loja+'/', {headers: headers})
    .map(res => res.json())
}

  getProdutosData(){
    var headers = new Headers();
    headers.append('Authorization','JWT ' +this.lp.getCredentials());
    return this.http.get(this.base_url+'/produto/'+this.lp.loja+'/', {headers: headers})
    .map(res => res.json())
  }
  alterarDadosLoja(data){
    console.log('chamei json alterar categoria');
    let data_user = {
      'email': data.email,
      'senha': data.senha
    };
    let data_loja = {
    'nome': data.nome,
    'telefone': data.telefone,
    'latitude': data.latitude,
    'longitude': data.longitude
    };
    let headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    headers.append('Authorization','JWT ' +this.lp.getCredentials());
    this.http.put(this.base_url+'/usuarios/'+this.lp.id+'/', data_user, {headers: headers})
    .map(res => res.json())
    .subscribe(data => {
      console.log(data['_body']);
      }, error => {
      console.log(error);
    });
    this.http.put(this.base_url+'/lojas/'+this.lp.loja+'/', data_loja, {headers: headers})
    .map(res => res.json())
    .subscribe(data => {
      console.log(data['_body']);
      }, error => {
      console.log(error);
    });
  }


  alterarFuncionario(data){
    console.log('chamei json alterar categoria');
    let headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    headers.append('Authorization','JWT ' +this.lp.getCredentials());
    return this.http.put(this.base_url+'/usuarios/'+data.id+'/', data, {headers: headers})
    .map(res => res.json())
    .subscribe(data => {
      console.log(data['_body']);
      }, error => {
      console.log(error);
    });
  }

  novoFuncionario(data){
    console.log('chamei Nova categoria');
    
    data.codigo = 2;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    headers.append('Authorization','JWT ' +this.lp.getCredentials());

    return this.http.post(this.base_url+'/usuarios/', data, {headers: headers})
    .map(res => res.json())
    .subscribe(data1 => {
      console.log(data1);
      
      data1.loja1 = {
        'loja': this.lp.loja
      };
      data1.usuario1 = {
        'usuario': data1.id
      };

      let env = {
        'usuario1': data1.id,
        'loja1': this.lp.loja
      };
      this.http.post(this.base_url+'/lojausuario/', env, {headers: headers})
      .map(res => res.json())
      .subscribe(data2 => {
        console.log(data2['_body']);
        }, error => {
        console.log(error);
      });
    }, error => {
      console.log(error);
    });


  }

  alterarCategoria(data){
    console.log('chamei json alterar categoria');
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

  novaCategoria(data){
    console.log('chamei Nova categoria');
    data.loja1 = this.lp.loja;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    headers.append('Authorization','JWT ' +this.lp.getCredentials());
    return this.http.post(this.base_url+'/categoria/', data, {headers: headers})
    .map(res => res.json())
    .subscribe(data => {
      console.log(data['_body']);
      }, error => {
      console.log(error);
    });
  }

  novoProduto(data){
    console.log('chamei json novo produto');
    var displayDate = new Date();
    var day = displayDate.getDate();
    var monthIndex = displayDate.getMonth();
    var year = displayDate.getFullYear();
    data.categoria1 = data.categoria;
    data.data = year+'-'+(monthIndex+1)+'-'+day
    let headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    headers.append('Authorization','JWT ' +this.lp.getCredentials());
    return this.http.post(this.base_url+'/produto/', data, {headers: headers})
    .map(res => res.json())
    .subscribe(data => {
      console.log(data['_body']);
      }, error => {
      console.log(error);
    });
  }

  alterarProduto(data){
    console.log('chamei json alterar produto');
    let headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    headers.append('Authorization','JWT ' +this.lp.getCredentials());
    return this.http.put(this.base_url+'/produto/'+data.id+'/', data, {headers: headers})
    .map(res => res.json())
    .subscribe(data => {
      console.log(data['_body']);
      }, error => {
      console.log(error);
    });
  }

  getLojasData(){
    var headers = new Headers();
    headers.append('Authorization','JWT ' +this.lp.getCredentials());
    return this.http.get(this.base_url+'/lojas/', {headers: headers})
    .map(res => res.json())
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
