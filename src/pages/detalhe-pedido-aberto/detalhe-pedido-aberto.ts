import { Component } from '@angular/core';
import { App, AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';

import { DetalheItemPedidoAberto } from '../detalhe-item-pedido-aberto/detalhe-item-pedido-aberto';
import { HomePage } from '../home/home';

import { Json } from '../../providers/json'

@IonicPage()
@Component({
  selector: 'page-detalhe-pedido-aberto',
  templateUrl: 'detalhe-pedido-aberto.html',
})
export class DetalhePedidoAberto {
  pedido;
  produtos = [];
  valor_total_pedido = 0;
  valor_total_pedido1;
  constructor(private appCtrl: App, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public json: Json) {
    console.log('---  Constructor Detalhe Pedido Aberto ---');
    this.pedido = this.navParams.get('pedido_data');
    this.pedido.usuario1 = this.pedido.usuario.id;
    this.pedido.loja1 = this.pedido.loja.id;
    this.pedido.recebimento1 = this.pedido.recebimento.id;
    this.json.getItensPedido(this.pedido.id).subscribe(data => {
      for(var i = 0; i < data.length; i++) {
        data[i].valor_total = (+data[i].quantidade * +data[i].valor);
        this.valor_total_pedido += +data[i].valor_total;
        data[i].valor_total1 = String((data[i].valor_total).toFixed(2)).replace('.',',');
        data[i].valor1 = String((+data[i].valor).toFixed(2)).replace('.',',');
        this.produtos.push(
          {
            produtos_data: data[i],
          }
        );
      }
      this.valor_total_pedido1 = String(this.valor_total_pedido.toFixed(2)).replace('.',',');
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhePedidoAberto');
  }

  cancelar_pedido(){

    let confirm = this.alertCtrl.create({
      title: 'Cancelar Pedido?',
      message: 'Você deseja cancelar o pedido?',
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
            this.pedido.situacao = "Cancelado"
            this.json.alterarStatusPedido(this.pedido).then(data => {
              this.appCtrl.getRootNav().setRoot(HomePage);
            });
            
            console.log('Pedido Cancelado');
          }
        }
      ]
    });
    confirm.present();
    
  }

  finalizar_pedido(){

    let confirm = this.alertCtrl.create({
      title: 'Finalizar Pedido?',
      message: 'Você deseja finalizar o pedido?',
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
            this.pedido.situacao = "Concluido"
            this.json.alterarStatusPedido(this.pedido).then(data => {
              this.appCtrl.getRootNav().setRoot(HomePage);
            });
            console.log('Pedido Finalizado');
          }
        }
      ]
    });
    confirm.present();

  }


  itemSelected(produto){
    this.navCtrl.push(DetalheItemPedidoAberto, produto);
  }

}
