import { Component } from '@angular/core';
import { Events, ToastController, App, AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';

import { DetalhePedidoAberto } from '../detalhe-pedido-aberto/detalhe-pedido-aberto';

import { Json } from '../../providers/json'

@IonicPage()
@Component({
  selector: 'page-detalhe-item-pedido-aberto',
  templateUrl: 'detalhe-item-pedido-aberto.html',
})
export class DetalheItemPedidoAberto {
  isenabled:boolean=false;
  produto;
  valor_total;
  imagem;
  quantidade;
  valor1;
  constructor(public events: Events,private toastCtrl: ToastController, private appCtrl: App,public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public json: Json) {
    this.produto = this.navParams.get('produtos_data');
    this.quantidade = this.produto.quantidade;
    this.valor1 = this.produto.valor;
    this.imagem = 'http://54.87.228.88/Project'+this.produto.produto.foto;
    this.valor_total = String((this.produto.valor * this.produto.quantidade).toFixed(2)).replace('.', ',');

  }

  soma(){
    this.quantidade += 1;
    this.valor_total = String((this.produto.valor * this.quantidade).toFixed(2)).replace('.', ',');
    if (this.quantidade != this.produto.quantidade) {
      this.isenabled = true;
    } else {
      this.isenabled = false;
    }
  }
  diminui(){
    if (this.quantidade > 1) {
      this.quantidade -= 1;
    this.valor_total = String((this.produto.valor * this.quantidade).toFixed(2)).replace('.', ',');
    }
    if (this.quantidade != this.produto.quantidade) {
      this.isenabled = true;
    } else {
      this.isenabled = false;
    }
  }

  remover_produto(){
    let confirm = this.alertCtrl.create({
      title: 'Remover Produto?',
      message: 'Você deseja remover o produto do pedido?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            console.log('Botão NÃO precionado');
          }
        },
        {
          text: 'Sim',
          handler: () => {
            console.log('Botão SIM precionado');
            let da = {pedido_data: this.produto.pedido};
            this.json.removerProdutoPedido(this.produto).then(data => {
              this.events.publish('produto_alterado');
              let toast = this.toastCtrl.create({
                message: 'Produto removido do pedido!',
                duration: 1500,
                position: 'middle'
              });
            
              toast.onDidDismiss(() => {
                console.log('Dismissed toast');
              });
            
              toast.present();
            });
            console.log('produto removido');
          }
        }
      ]
    });
    confirm.present();
  }

  atualizar_produto(){

    let confirm = this.alertCtrl.create({
      title: 'Atualizar Produto?',
      message: 'Você deseja atualizar a quantidade do produto?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            console.log('Botão NÃO precionado');
          }
        },
        {
          text: 'Sim',
          handler: () => {
            console.log('Botão SIM precionado');
            this.produto.quantidade = this.quantidade;
            this.produto.produto1 = this.produto.produto.id;
            this.produto.pedido1 = this.produto.pedido.id;
            this.json.alterarQuantidadeProduto(this.produto).then(data => {
              this.events.publish('produto_alterado');
              let toast = this.toastCtrl.create({
                message: 'Quantidade alterada!',
                duration: 1500,
                position: 'middle'
              });
            
              toast.onDidDismiss(() => {
                console.log('Dismissed toast');
              });
            
              toast.present();
            });
            console.log('Quantidade alterada');
          }
        }
      ]
    });
    confirm.present();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheItemPedidoAberto');
  }

}
