import { Component } from '@angular/core';
import { App, AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
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
  constructor(public alertCtrl: AlertController, private appCtrl: App, private formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams, public json: Json) {
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
    this.json.alterarCategoria(data).then(data1 => {
      if (data1 != false) {
        this.appCtrl.getRootNav().setRoot(Categoria);
      } else {
        let confirm = this.alertCtrl.create({
          title: 'Erro ao alterar categoria',
          message: 'Não foi possivel alterar a categoria no momento, verifique sua conexão e tente novamente mais tarde.',
          buttons: [
            {
              text: 'Ok',
              role: 'cancel',
              handler: () => {
                console.log('Botão ok precionado');
              }
            }
          ]
        });
        confirm.present();
      }
    });
    
  }

  novo(dados){
    console.log('Nova Categoria');
    let dat = {
      'nome': dados.value.name,
      'situacao': dados.value.status
    };
    console.log(dat);
    this.json.novaCategoria(dat).then(data => {
      if (data != false) {
        this.appCtrl.getRootNav().setRoot(Categoria);
      } else {
        let confirm = this.alertCtrl.create({
          title: 'Erro ao criar categoria',
          message: 'Não foi possivel criar a categoria no momento, verifique sua conexão e tente novamente mais tarde.',
          buttons: [
            {
              text: 'Ok',
              role: 'cancel',
              handler: () => {
                console.log('Botão ok precionado');
              }
            }
          ]
        });
        confirm.present();
      }
    });
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
