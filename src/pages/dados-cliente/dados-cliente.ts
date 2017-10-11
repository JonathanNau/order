import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { Json } from '../../providers/json'

@IonicPage()
@Component({
  selector: 'page-dados-cliente',
  templateUrl: 'dados-cliente.html',
})
export class DadosCliente {
  data_cliente: any;
  private dados : FormGroup;
  constructor(private formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams, private json: Json) {
    this.json.getCategoriaData().subscribe(data => {
      this.data_cliente = [];

      console.log(this.data_cliente);
    });
    this.dados = this.formBuilder.group({
      name: ['Jonathan Nau', Validators.required],
      email: ['jonathan_nau@live.com', Validators.required],
      telefone: ['996945810', Validators.required],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DadosCliente');
  }

}
