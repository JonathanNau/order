import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { LoginProvider } from '../../providers/loginprovider'
import { Json } from '../../providers/json'

/**
 * Generated class for the DadosLoja page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-dados-loja',
  templateUrl: 'dados-loja.html'
})
export class DadosLoja {
  data_loja: any;
  id: any;
  public nome: any;
  public email: any;
  public telefone: any;
  public latitude: any;
  public longitude: any;
  public senha: any;
  private dados : FormGroup;
  
  constructor(public json: Json, private formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams, private lp: LoginProvider) {
    /*json.getDadosLoja().then(data => {
      this.data_loja = [];
      //this.id = data.id;
      this.email = data['email'];
      this.telefone = data['telefone'];
      this.senha = data['senha'];
      //this.telefone = data.telefone;
      console.log(data['email']);
    }, err => console.log(err));
    this.ionViewLoaded();*/
    
    this.dados = this.formBuilder.group({
      name: [lp.nome_loja, Validators.required],
      email: [lp.email, Validators.required],
      telefone: [lp.telefone_loja, Validators.required],
      latitude: [lp.latitude_loja, Validators.required],
      longitude: [lp.longitude_loja, Validators.required],
      senha: [lp.senha, Validators.required],
    });
  }

  
  
  /*
  promise.then((res) => {
      this.email = res['email'];
      this.telefone = res['telefone'];
      this.senha = res['senha'];
    console.log('I get called:', res); // I get called: true
  });

  }*/
  atualiza(dados){
    console.log('Alterar dados da loja');

    let data = {
      'nome': dados.value.name,
      'email': dados.value.email,
      'telefone': dados.value.telefone,
      'longitude': dados.value.longitude,
      'latitude': dados.value.latitude,
      'password': dados.value.senha
    }
    console.log(data);
    this.json.alterarDadosLoja(data);
    //this.appCtrl.getRootNav().setRoot(Categoria);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DadosLoja');
  }

}
