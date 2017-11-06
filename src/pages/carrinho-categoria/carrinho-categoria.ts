import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Json } from '../../providers/json'

import { CarrinhoProduto } from '../carrinho-produto/carrinho-produto';
import { Checkout } from '../checkout/checkout';

/**
 * Generated class for the CarrinhoCategoria page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-carrinho-categoria',
  templateUrl: 'carrinho-categoria.html',
})
export class CarrinhoCategoria {
  categorias: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public json: Json) {
    this.json.getCategoriaClientesData().subscribe(data => {
      this.categorias = [];

      for(var i = 0; i < data.length; i++) {
        if (data[i].situacao == true){     
          this.categorias.push(
            {
              categoria_data: data[i]
            }
          );
        }
      }
      console.log(this.categorias);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarrinhoCategoria');
  }

  itemSelected(categoria){
    this.navCtrl.push(CarrinhoProduto, categoria);
  }
  checkout(){
    this.navCtrl.push(Checkout)
  }

}
