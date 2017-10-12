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
      name: ['Italiano', Validators.required],
      telefone: ['30441400', Validators.required],
      latitude: ['-27.092699', Validators.required],
      longitude: ['-48.914541', Validators.required],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DadosLoja');
  }

}
