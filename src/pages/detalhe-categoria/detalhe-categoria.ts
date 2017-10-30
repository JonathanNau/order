import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { Json } from '../../providers/json'
import { Categoria } from '../categoria/categoria';

@IonicPage()
@Component({
  selector: 'page-detalhe-categoria',
  templateUrl: 'detalhe-categoria.html',
})
export class DetalheCategoria {
  data: any;
  a = 0;
  private dados : FormGroup;
  constructor(private appCtrl: App, private formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams, public json: Json) {
    this.data = this.navParams.get('categoria_data');
    if (this.data !== 1){
      this.dados = this.formBuilder.group({
        name: [this.data.nome, Validators.required],
        status: [this.data.situacao, Validators.required],
      });
      this.a=1;
    } else {
      this.dados = this.formBuilder.group({
        name: ['', Validators.required],
        status: [true, Validators.required],
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
  alterar(data, dados){
    console.log('Alterar Categoria');
    data.nome = dados.value.name;
    data.situacao = dados.value.status;
    data.loja1 = data.loja.id;
    console.log(data);
    this.json.alterarCategoria(data);
    this.appCtrl.getRootNav().setRoot(Categoria);
  }

  novo(dados){
    console.log('Nova Categoria');
    let dat = {
      'nome': dados.value.name,
      'situacao': dados.value.status
    };
    console.log(dat);
    this.json.novaCategoria(dat);
    this.appCtrl.getRootNav().setRoot(Categoria);
  }
  
  goback() {
    this.navCtrl.pop();
    console.log('Voltar para categoria');
 }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheItem');
  }

}
