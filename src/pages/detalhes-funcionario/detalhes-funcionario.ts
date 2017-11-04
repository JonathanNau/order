import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { Json } from '../../providers/json'
import { Funcionarios } from '../funcionarios/funcionarios';

@IonicPage()
@Component({
  selector: 'page-detalhes-funcionario',
  templateUrl: 'detalhes-funcionario.html',
})
export class DetalhesFuncionario {
  data: any;
  a = 0;
  private dados : FormGroup;
  constructor(private appCtrl: App, public json: Json, private formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
    this.data = this.navParams.get('funcionarios_data');
    if (this.data !== 1){
      this.dados = this.formBuilder.group({
        nome: [this.data.usuario.username, Validators.required],
        email: [this.data.usuario.email, Validators.required],
        password: [this.data.usuario.password, Validators.required],
        status: [this.data.usuario.is_active, Validators.required],
      });
      this.a=1;
    } else {
      this.dados = this.formBuilder.group({
        nome: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
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
    let dat = {
      'id': data.usuario.id,
      'username': dados.value.nome,
      'email': dados.value.email,
      'password': dados.value.password,
      'is_active': dados.value.status
    };
    console.log(dat);
    this.json.alterarFuncionario(dat);
    this.appCtrl.getRootNav().setRoot(Funcionarios);
  }

  novo(dados){
    console.log('Nova Categoria');
    let dat = {
      'username': dados.value.nome,
      'email': dados.value.email,
      'password': dados.value.password,
      'is_active': dados.value.status
    };
    console.log(dat);
    this.json.novoFuncionario(dat);
    this.appCtrl.getRootNav().setRoot(Funcionarios);
  }

  goback() {
    this.navCtrl.pop();
    console.log('Click para voltar aos funcionários');
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesFuncionario');
  }

}
