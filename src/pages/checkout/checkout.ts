import { Component } from '@angular/core';
import { Events, App, IonicPage, NavController, NavParams, AlertController, ViewController } from 'ionic-angular';

import { HistoricoPedidos } from '../historico-pedidos/historico-pedidos';
import { Login } from '../login/login';
import { CarrinhoProdutoDetalhe } from '../carrinho-produto-detalhe/carrinho-produto-detalhe';
import { DetalhePedidoFechado } from '../detalhe-pedido-fechado/detalhe-pedido-fechado';

import { Carrinho } from '../../providers/carrinho';
import { Json } from '../../providers/json';

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class Checkout {
  public produtos;
  isenabled:boolean=false;
  public valor_total;
  constructor(public events: Events, private json: Json, private carrinho: Carrinho, public appCtrl: App, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public viewCtrl: ViewController) {
    this.produtos = carrinho.itens;
    this.valor_total = 0.0;
    if (this.carrinho.itens.length > 0){
      this.isenabled = true;
    }
    for (let item of this.produtos){
      item.valor_total_item = +item.valor * +item.quantidade
      console.log(item);
      console.log(item.valor*item.quantidade);
      console.log(item.quantidade);
      this.valor_total += +item.valor * +item.quantidade;
    }    
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
            this.json.novoPedido().then(data => {
              console.log(data);
              let produto = {'pedido_data': data}
              this.navCtrl.setRoot(DetalhePedidoFechado, produto);
            });
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
        if (this.carrinho.itens.length == 0){
          this.isenabled = false;
        }
        console.log('Produto removido e valor autalizado');
      } else {
        console.log('Problema ao remover item');
      }
    });
    this.events.publish('adicionado');
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
