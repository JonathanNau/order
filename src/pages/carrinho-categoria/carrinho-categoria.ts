import { Component } from '@angular/core';
import { Events, IonicPage, NavController, NavParams } from 'ionic-angular';

import { Json } from '../../providers/json'
import { Carrinho } from '../../providers/carrinho'

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
  quantidade_produtos = 0;
  constructor(public events: Events, public navCtrl: NavController, public navParams: NavParams, public json: Json, private carrinho: Carrinho) {
    this.quantidade_produtos = this.carrinho.itens.length;
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
    events.subscribe('adicionado', () => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      this.quantidade_produtos = this.carrinho.itens.length;
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
