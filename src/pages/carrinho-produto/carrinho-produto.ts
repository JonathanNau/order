import { Component } from '@angular/core';
import { Events, ToastController, IonicPage, NavController, NavParams } from 'ionic-angular';

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
  quantidade_produtos = 0;
  constructor(public events: Events, private toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams, private json: Json, private carrinho: Carrinho) {
    this.quantidade_produtos = carrinho.itens.length;
    this.data = this.navParams.get('categoria_data');
    this.json.getProdutosClienteData(this.data.id).subscribe(data => {
      this.produtos = [];

      for(var i = 0; i < data.length; i++) {
        if (data[i].situacao == true){              
          this.produtos.push(
            {
              produto_data: data[i]
            }
          );
        }
      }
      console.log(this.produtos);
    });
    events.subscribe('adicionado', () => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      this.quantidade_produtos = this.carrinho.itens.length;
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
      duration: 1500,
      position: 'middle'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
    this.quantidade_produtos = this.carrinho.itens.length;
    this.events.publish('adicionado');
  }
  onPageLoaded(){
    this.quantidade_produtos = this.carrinho.itens.length;
  }

  

}
