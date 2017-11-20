import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//import { DetalhePedido } from '../detalhe-pedido/detalhe-pedido';
import { DetalhePedidoFechado } from '../detalhe-pedido-fechado/detalhe-pedido-fechado';

import { Json } from '../../providers/json'

@IonicPage()
@Component({
  selector: 'page-historico-pedidos',
  templateUrl: 'historico-pedidos.html',
})
export class HistoricoPedidos {
  public pedidos;
  constructor(public navCtrl: NavController, public navParams: NavParams, public json: Json) {
    this.json.getPedidosLoja().subscribe(data => {
      this.pedidos = [];

      for(var i = 0; i < data.length; i++) {
        if (data[i].situacao == 'Concluido' || data[i].situacao == 'Cancelado'){
          if (data[i].situacao == 'Concluido'){
            data[i].color = "secondary";
          } else {
            data[i].color = "danger"
          }
          this.pedidos.push(
            {
              pedido_data: data[i]
            }
          );
        }
      }
      console.log(this.pedidos);
    });

  }
  itemSelected(pedido){
    this.navCtrl.push(DetalhePedidoFechado, pedido);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoricoPedidos');
  }

}
