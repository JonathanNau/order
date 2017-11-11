import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams, AlertController, ViewController } from 'ionic-angular';

import { HistoricoPedidos } from '../historico-pedidos/historico-pedidos';
import { Login } from '../login/login';
import { CarrinhoProdutoDetalhe } from '../carrinho-produto-detalhe/carrinho-produto-detalhe';

import { Carrinho } from '../../providers/carrinho';
import { Json } from '../../providers/json';

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class Checkout {
  public produtos;

  public valor_total;
  constructor(private json: Json, private carrinho: Carrinho, public appCtrl: App, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public viewCtrl: ViewController) {
    this.produtos = carrinho.itens;
    this.valor_total = 0.0;
    for (let item of this.produtos){
      item.valor_total_item = +item.valor * +item.quantidade
      console.log(item);
      console.log(item.valor*item.quantidade);
      console.log(item.quantidade);
      this.valor_total += +item.valor * +item.quantidade;
    }
    /*this.produtos = [
      { nome: "Dog Alcatra", quantidade: 1},
      { nome: "Dog Calabresa", quantidade: 1},
      { nome: "Coca-cola", quantidade: 2}
    ];*/
    
  }

  checkout(){
    let alert = this.alertCtrl.create({
      title: 'Finalizar pedido',
      message: 'Deseja finalizar o pedido?',
      buttons: [
        {
          text: 'Não, continuar comprando',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Sim, estou satisfeito',
          handler: () => {
            this.json.novoPedido();
          }
        }
      ]
    });
    alert.present();
    /*
    const alert = this.alertCtrl.create({
      title: "Pedido realizado com sucesso!!!!",
      subTitle: 'O número do seu pedido é: 3',
      buttons: [
        {
          text: 'Ok',
          handler: data => {
            this.appCtrl.getRootNav().setRoot(HistoricoPedidos);
          }
        }
      ]
    });
    alert.present();
    */
    //direcionar para meus pedidos
  }

  remove_carrinho(produto){
    this.carrinho.remover_item(produto).then(data => {
      if(data){
        this.atualiza_valor_total();
        console.log('Produto removido e valor autalizado');
      } else {
        console.log('Problema ao remover item');
      }
    });
    
  }

  atualiza_valor_total(){
    this.produtos = this.carrinho.itens;
    this.valor_total = 0.0;
    for (let item of this.produtos){
      item.valor_total_item = +item.valor * +item.quantidade
      console.log(item);
      console.log(item.valor*item.quantidade);
      console.log(item.quantidade);
      this.valor_total += +item.valor * +item.quantidade;
    }
  }

  itemSelected(produto){
    produto.produto_data = produto.produto;
    this.navCtrl.push(CarrinhoProdutoDetalhe, produto);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Checkout');
  }

}
