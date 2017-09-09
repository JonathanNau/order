import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { Json } from '../../providers/json'

@IonicPage()
@Component({
  selector: 'page-detalhe-item',
  templateUrl: 'detalhe-item.html',
})
export class DetalheItem {
  data: any;
  private dados : FormGroup;
  constructor(private formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams, public json: Json) {
    this.data = this.navParams.get('categoria_data');
    this.dados = this.formBuilder.group({
      name: [this.data.nome, Validators.required],
      status: [this.data.situacao, Validators.required],
    });
  }
  alterar(data, dados){
    data.nome = dados.value.name;
    data.situacao = dados.value.status;
    this.json.alterarCategoria(data);
  }
  
  goback() {
    this.navCtrl.pop();
    console.log('Click on button Test Console Log');
 }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheItem');
  }

}
