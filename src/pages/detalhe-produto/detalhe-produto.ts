import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { Json } from '../../providers/json'

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
  constructor(public json: Json, private formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
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
        categoria: [this.data.categoria.nome, Validators.required],
        nome: [this.data.nome, Validators.required],
        valor: [this.data.valor, Validators.required],
        status: [this.data.situacao, Validators.required],
      });
      this.a=1;
    } else {
      this.dados = this.formBuilder.group({
        categoria: ['comida', Validators.required],
        nome: ['Dog Atum', Validators.required],
        valor: ['17,00', Validators.required],
        status: ['True', Validators.required],
      });
      this.a=2;
    }
  }

  alterar(data, dados){
    data.nome = dados.value.nome;
    data.situacao = dados.value.status;
    //this.json.alterarCategoria(data);
  }

  goback() {
    this.navCtrl.pop();
    console.log('Click para voltar aos produtos');
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheProduto');
  }

}
