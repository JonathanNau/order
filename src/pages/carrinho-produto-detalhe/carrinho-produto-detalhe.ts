import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CarrinhoProdutoDetalhe page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-carrinho-produto-detalhe',
  templateUrl: 'carrinho-produto-detalhe.html',
})
export class CarrinhoProdutoDetalhe {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarrinhoProdutoDetalhe');
  }

}
