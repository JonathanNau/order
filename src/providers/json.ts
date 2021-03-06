import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { LoginProvider } from '../providers/loginprovider'
import { Carrinho } from '../providers/carrinho'

@Injectable()
export class Json {
  data: any;
  base_url = 'http://54.87.228.88/Project/api';
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

  getRecebimentosLoja(){
    console.log('Get recebimentos');
    var headers = new Headers();
    headers.append('Authorization','JWT ' +this.lp.getCredentials());
    return this.http.get(this.base_url+'/recebimento/'+this.lp.loja+'/', {headers: headers})
    .map(res => res.json())
  }

  getCategoriaClientesData(){
    var headers = new Headers();
    headers.append('Authorization','JWT ' +this.lp.getCredentials());
    return this.http.get(this.base_url+'/categoria/'+this.carrinho.loja.loja_data.id+'/', {headers: headers})
    .map(res => res.json())
  }

  getCategoriaLojaCatalogo(){
    var headers = new Headers();
    headers.append('Authorization','JWT ' +this.lp.getCredentials());
    return this.http.get(this.base_url+'/categoria/'+this.lp.loja+'/', {headers: headers})
    .map(res => res.json())
  }

  getProdutosClienteData(id_categoria){
    var headers = new Headers();
    headers.append('Authorization','JWT ' +this.lp.getCredentials());
    return this.http.get(this.base_url+'/produto-categoria/'+id_categoria+'/', {headers: headers})
    .map(res => res.json())
  }

  getPedidosLoja(){
    var headers = new Headers();
    headers.append('Authorization','JWT ' +this.lp.getCredentials());
    return this.http.get(this.base_url+'/pedido-loja/'+this.lp.loja+'/', {headers: headers})
    .map(res => res.json())
  }
  getPedidosCliente(){
    var headers = new Headers();
    headers.append('Authorization','JWT ' +this.lp.getCredentials());
    return this.http.get(this.base_url+'/pedido-cliente/'+this.lp.id+'/', {headers: headers})
    .map(res => res.json())
  }

  getItensPedido(id_pedido){
    var headers = new Headers();
    headers.append('Authorization','JWT ' +this.lp.getCredentials());
    return this.http.get(this.base_url+'/itempedido/'+id_pedido+'/', {headers: headers})
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
    console.log('chamei json alterar dados loja');
    let data_user = {
      'email': data.email,
      'password': data.password
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
      this.lp.email = data.email;
      this.lp.senha = data.password;
      console.log(data['_body']);
      }, error => {
      console.log(error);
    });
    this.http.put(this.base_url+'/lojas/'+this.lp.loja+'/', data_loja, {headers: headers})
    .map(res => res.json())
    .subscribe(data => {
      this.lp.nome_loja = data.nome
      this.lp.telefone_loja = data.telefone;
      this.lp.latitude_loja = data.latitude;
      this.lp.longitude_loja = data.longitude;
      console.log(data['_body']);
      }, error => {
      console.log(error);
    });
  }


  alterarDadosCliente(data){
    console.log('chamei json alterar dados cliente');

    let headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    headers.append('Authorization','JWT ' +this.lp.getCredentials());
    return new Promise(resolve => {
      this.http.put(this.base_url+'/usuarios/'+this.lp.id+'/', data, {headers: headers})
      .map(res => res.json())
      .subscribe(data => {
        console.log(data['_body']);
        this.lp.nome_cliente = data.first_name;
        this.lp.email = data.email;
        this.lp.senha = data.password;
        resolve(data);
        }, error => {
        console.log(error);
        resolve(false);
      });
    });
  }

  alterarFuncionario(data){
    console.log('chamei json alterar categoria');
    let headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    headers.append('Authorization','JWT ' +this.lp.getCredentials());

    return new Promise(resolve => {
      this.http.put(this.base_url+'/usuarios/'+data.id+'/', data, {headers: headers})
      .map(res => res.json())
      .subscribe(data => {
        console.log(data['_body']);
        resolve(data);
        }, error => {
          resolve(false);
          console.log(error);
      });
    });
  }

  alterarRecebimento(data){
    var headers = new Headers();
    headers.append('Authorization','JWT ' +this.lp.getCredentials());
    return new Promise(resolve => {
      this.http.put(this.base_url+'/recebimento/'+data.id+'/', data, {headers: headers})
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      });
    });
  }

  alterarStatusPedido(data1){
    console.log('chamei json alterar status do pedido');
    let headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    headers.append('Authorization','JWT ' +this.lp.getCredentials());
    return new Promise(resolve => {
      this.http.put(this.base_url+'/pedido/'+data1.id+'/', data1, {headers: headers})
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      });
    });
  }

  alterarQuantidadeProduto(data1){
    console.log('chamei json alterar quantidade do produto');
    let headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    headers.append('Authorization','JWT ' +this.lp.getCredentials());
    return new Promise(resolve => {
      this.http.put(this.base_url+'/itempedido/'+data1.id+'/', data1, {headers: headers})
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      });
    });
  }

  removerProdutoPedido(data1){
    console.log('chamei json remover produto');
    let headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    headers.append('Authorization','JWT ' +this.lp.getCredentials());
    return new Promise(resolve => {
      this.http.delete(this.base_url+'/itempedido/'+data1.id+'/', {headers: headers})
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      });
    });
  }

  novoFuncionario(data){
    console.log('JSON Novo funcionario');
    
    data.codigo = 2;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    headers.append('Authorization','JWT ' +this.lp.getCredentials());
    return new Promise(resolve => {
      this.http.post(this.base_url+'/usuarios/', data, {headers: headers})
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
          resolve(data2);
          console.log(data2['_body']);
          }, error => {
            resolve(false);
          console.log(error);
        });
      }, error => {
        resolve(false);
        console.log(error);
      });
    });

  }

  alterarCategoria(data){
    console.log('chamei json alterar categoria');
    let headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    headers.append('Authorization','JWT ' +this.lp.getCredentials());

    return new Promise(resolve => {
      this.http.put(this.base_url+'/categoria/'+data.id+'/', data, {headers: headers})
      .map(res => res.json())
      .subscribe(data => {
        resolve(data);
        console.log(data['_body']);
      }, error => {
        resolve(false);
        console.log(error);
      });
    });
  }

  novaCategoria(data){
    console.log('chamei Nova categoria');
    data.loja1 = this.lp.loja;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    headers.append('Authorization','JWT ' +this.lp.getCredentials());
    return new Promise(resolve => {
      this.http.post(this.base_url+'/categoria/', data, {headers: headers})
      .map(res => res.json())
      .subscribe(data => {
        resolve(data);
        console.log(data['_body']);
        }, error => {
          resolve(false);
        console.log(error);
      });
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
    return new Promise(resolve => {
      this.http.post(this.base_url+'/produto/', data, {headers: headers})
      .map(res => res.json())
      .subscribe(data => {
        resolve(data);
        console.log(data['_body']);
      }, error => {
        resolve(false);
        console.log(error);
      });
  });
  }

  recuperaData(){
    var displayDate = new Date();
    var day = displayDate.getDate();
    var monthIndex = displayDate.getMonth();
    var year = displayDate.getFullYear();
    return year+'-'+(monthIndex+1)+'-'+day;
  }
  novoPedido(){
    console.log('Criar Novo Pedido');
    let data = {
    'data': this.recuperaData(),
    'recebimento_valor': this.carrinho.valor_recebimento,
    'situacao': 'Pendente',
    'usuario1': this.lp.id,
    'loja1': this.carrinho.loja.loja_data.id,
    'recebimento1': this.carrinho.tipo_recebimento.id
    };
    //data.codigo = 2;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    headers.append('Authorization','JWT ' +this.lp.getCredentials());

    return new Promise(resolve => {
    this.http.post(this.base_url+'/pedido/', data, {headers: headers})
    .map(res => res.json())
    .subscribe(data1 => {
      console.log('Pedido Criado com sucesso!');
      console.log(data1);
      console.log('Iniciar salvamento dos produtos!');

      for (let i of this.carrinho.itens){
        i.pedido = data1.id;
        i.produto = i.produto.id;
      }

      let env = {
        'produtos': this.carrinho.itens,
      }
      console.log(JSON.stringify(env));
      this.http.post(this.base_url+'/itempedido2/', JSON.stringify(env), {headers: headers})
      .map(res => res.json())
      .subscribe(data2 => {
      console.log(data2['_body']);
        resolve(data1);
        }, error => {
        resolve(false);
        console.log('Problema ao inserir os produtos');
        console.log(error);
      });
    }, error => {
      resolve(false);
      console.log('Problema ao criar um novo pedido');
      console.log(error);
    });
  });

  }

  testeProduto(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    headers.append('Authorization','JWT ' +this.lp.getCredentials());

    console.log('Iniciar salvamento dos produtos!');
    for (let i of this.carrinho.itens){
      let env = {
        'pedido1': 2,
        'produto1': i.produto.id,
        'valor': i.valor,
        'quantidade': i.quantidade
      }

      this.http.post(this.base_url+'/itempedido/', env, {headers: headers})
      .map(res => res.json())
      .subscribe(data2 => {
        console.log(data2['_body']);
        }, error => {
        console.log(error);
      });
    }
  }

  /*
return new Promise(resolve => {
      this.http.put(this.base_url+'/categoria/'+data.id+'/', data, {headers: headers})
      .map(res => res.json())
      .subscribe(data => {
        resolve(data);
        console.log(data['_body']);
      }, error => {
        resolve(false);
        console.log(error);
      });
    });
  */
  alterarProduto(data){
    console.log('chamei json alterar produto');
    let headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    headers.append('Authorization','JWT ' +this.lp.getCredentials());
    return new Promise(resolve => {
      this.http.put(this.base_url+'/produto/'+data.id+'/', data, {headers: headers})
      .map(res => res.json())
      .subscribe(data => {
        resolve(data);
        console.log(data['_body']);
        }, error => {
          resolve(false);
        console.log(error);
      });
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
