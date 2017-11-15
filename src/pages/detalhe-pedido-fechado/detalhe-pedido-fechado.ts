import { Component } from '@angular/core';
import { App, AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';

import { DetalheItemPedidoFechado } from '../detalhe-item-pedido-fechado/detalhe-item-pedido-fechado';

import { Json } from '../../providers/json'

@IonicPage()
@Component({
  selector: 'page-detalhe-pedido-fechado',
  templateUrl: 'detalhe-pedido-fechado.html',
})
export class DetalhePedidoFechado {
  pedido;
  produtos = [];
  valor_total_pedido = 0;
  valor_total_pedido1;
  situacao;
  constructor(private appCtrl: App, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public json: Json) {
    console.log('---  Constructor Detalhe Pedido Aberto ---');
    this.pedido = this.navParams.get('pedido_data');
    this.situacao = this.pedido.situacao;
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

  itemSelected(produto){
    this.navCtrl.push(DetalheItemPedidoFechado, produto);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhePedidoFechado');
  }

}
