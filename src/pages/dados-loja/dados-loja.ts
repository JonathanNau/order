import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

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
  templateUrl: 'dados-loja.html',
})
export class DadosLoja {
  data_loja: any;
  private dados : FormGroup;
  
  constructor(private formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams, private json: Json) {
    this.json.getCategoriaData().subscribe(data => {
      this.data_loja = [];

      console.log(this.data_loja);
    });
    this.dados = this.formBuilder.group({
      name: ['', Validators.required],
      telefone: ['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DadosLoja');
  }

}
