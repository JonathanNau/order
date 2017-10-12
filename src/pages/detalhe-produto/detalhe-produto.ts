import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

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
  private dados : FormGroup;
  constructor(private formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
    this.dados = this.formBuilder.group({
      categoria: ['comida', Validators.required],
      nome: ['Dog Atum', Validators.required],
      valor: ['17,00', Validators.required],
      status: ['True', Validators.required],
    });
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
