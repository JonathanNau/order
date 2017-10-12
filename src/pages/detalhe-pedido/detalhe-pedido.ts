import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalhePedido page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-detalhe-pedido',
  templateUrl: 'detalhe-pedido.html',
})
export class DetalhePedido {
  public produtos;
  public loja;
  public valor;
  public status;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.loja = 'Italiano';
  this.valor = '41,00';
  this.status = 'Em andamento'
    this.produtos = [
      { nome: "Dog Alcatra", quantidade: 1},
      { nome: "Dog Calabresa", quantidade: 1},
      { nome: "Coca-cola", quantidade: 2}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhePedido');
  }

}
