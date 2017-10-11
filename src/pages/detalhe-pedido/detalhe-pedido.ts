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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.loja = 'Italiano';
  this.valor = '145,00';
    this.produtos = [
      { nome: "x-salada", quantidade: 3},
      { nome: "Dog Calabresa", quantidade: 2},
      { nome: "Coca", quantidade: 5}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhePedido');
  }

}
