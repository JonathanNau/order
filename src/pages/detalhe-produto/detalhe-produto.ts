import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { Json } from '../../providers/json'

import { Produtos } from '../produtos/produtos';

/**
 * Generated class for the DetalheProduto page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-detalhe-produto',
  templateUrl: 'detalhe-produto.html',
})
export class DetalheProduto {
  data: any;
  a = 0;
  categorias: any;
  private dados : FormGroup;
  constructor(private appCtrl: App, public json: Json, private formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
    this.json.getCategoriaData().subscribe(data => {
      this.categorias = [];

      for(var i = 0; i < data.length; i++) {
                  
        this.categorias.push(
          {
            categoria_data: data[i]
          }
        );
      }
      console.log(this.categorias);
    });
    
    this.data = this.navParams.get('produto_data');
    if (this.data !== 1){
      this.dados = this.formBuilder.group({
        categoria: [this.data.categoria.id, Validators.required],
        nome: [this.data.nome, Validators.required],
        valor: [this.data.valor, Validators.required],
        status: [this.data.situacao, Validators.required],
      });
      this.a=1;
    } else {
      this.dados = this.formBuilder.group({
        categoria: ['', Validators.required],
        nome: ['', Validators.required],
        valor: ['', Validators.required],
        status: ['True', Validators.required],
      });
      this.a=2;
    }
  }

  chama(data, dados){
    if (this.a == 1){
      this.alterar(data, dados)
    } else {
      this.novo(dados)
    }
  }

  novo(dados){
    console.log('Novo Produto');
    let dat = {
      'categoria': dados.value.categoria,
      'nome': dados.value.nome,
      'valor': dados.value.valor,
      'situacao': dados.value.status
    };
    console.log(dat);
    this.json.novoProduto(dat);
    this.appCtrl.getRootNav().setRoot(Produtos);
  }

  alterar(data, dados){
    data.categoria = dados.value.categoria;
    data.categoria1 = dados.value.categoria;
    data.nome = dados.value.nome;
    data.valor = dados.value.valor;
    data.situacao = dados.value.status;
    console.log(data);
    this.json.alterarProduto(data);
    this.appCtrl.getRootNav().setRoot(Produtos);
  }

  goback() {
    this.navCtrl.pop();
    console.log('Click para voltar aos produtos');
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheProduto');
  }

}
