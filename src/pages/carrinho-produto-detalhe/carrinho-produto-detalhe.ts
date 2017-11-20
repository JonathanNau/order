import { Component } from '@angular/core';
import { Events, ToastController, IonicPage, NavController, NavParams } from 'ionic-angular';

import { Carrinho } from '../../providers/carrinho'


@IonicPage()
@Component({
  selector: 'page-carrinho-produto-detalhe',
  templateUrl: 'carrinho-produto-detalhe.html',
})
export class CarrinhoProdutoDetalhe {
  data;
  valor = 1;
  imagem = '';
  valor_total;
  constructor(public events: Events, private toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams, private carrinho: Carrinho) {
    this.data = this.navParams.get('produto_data');
    this.imagem = 'http://192.168.0.149:8000'+this.data.foto
    console.log(this.data);
    this.valor_total = this.data.valor;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarrinhoProdutoDetalhe');
  }

  soma(){
    this.valor += 1;
    this.valor_total = (this.valor * this.data.valor).toFixed(2);
  }
  diminui(){
    if (this.valor > 1) {
    this.valor -= 1;
    this.valor_total = (this.valor * this.data.valor).toFixed(2);
    }
  }

  add_carrinho(){
    this.carrinho.adicionar_item(this.data, this.valor)

    let toast = this.toastCtrl.create({
      message: 'Produto adicionado ao carrinho!',
      duration: 3000,
      position: 'middle'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
    this.events.publish('adicionado');
  }

}
