import { Component } from '@angular/core';
import { ToastController, IonicPage, NavController, NavParams } from 'ionic-angular';

import { Checkout } from '../checkout/checkout';

import { Json } from '../../providers/json'
import { Carrinho } from '../../providers/carrinho'

import { CarrinhoProdutoDetalhe } from '../carrinho-produto-detalhe/carrinho-produto-detalhe';

@IonicPage()
@Component({
  selector: 'page-carrinho-produto',
  templateUrl: 'carrinho-produto.html',
})
export class CarrinhoProduto {
  public produtos;
  data;
  constructor(private toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams, private json: Json, private carrinho: Carrinho) {
    this.data = this.navParams.get('categoria_data');
    this.json.getProdutosClienteData(this.data.id).subscribe(data => {
      this.produtos = [];

      for(var i = 0; i < data.length; i++) {
                  
        this.produtos.push(
          {
            produto_data: data[i]
          }
        );
      }
      console.log(this.produtos);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarrinhoProduto');
  }

  itemSelected(produto){
    this.navCtrl.push(CarrinhoProdutoDetalhe, produto);
  }

  checkout(){
    this.navCtrl.push(Checkout)
  }

  add_carrinho(produto, quantidade){
    this.carrinho.adicionar_item(produto.produto_data, quantidade)

    let toast = this.toastCtrl.create({
      message: 'Produto adicionado ao carrinho!',
      duration: 3000,
      position: 'middle'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();

  }

}
