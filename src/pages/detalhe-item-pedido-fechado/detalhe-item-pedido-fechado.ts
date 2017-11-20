import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalheItemPedidoFechado page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-detalhe-item-pedido-fechado',
  templateUrl: 'detalhe-item-pedido-fechado.html',
})
export class DetalheItemPedidoFechado {
  produto;
  valor_total;
  imagem;
  quantidade;
  valor1;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.produto = this.navParams.get('produtos_data');
    this.quantidade = this.produto.quantidade;
    this.valor1 = this.produto.valor;
    this.imagem = 'http://192.168.0.149:8000'+this.produto.produto.foto;
    this.valor_total = String((this.produto.valor * this.produto.quantidade).toFixed(2)).replace('.', ',');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheItemPedidoFechado');
  }

}
