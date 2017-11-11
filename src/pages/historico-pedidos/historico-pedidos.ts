import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DetalhePedido } from '../detalhe-pedido/detalhe-pedido';

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
          this.pedidos.push(
            {
              pedido_data: data[i]
            }
          );
        }
      }
      console.log(this.pedidos);
    });
    /*
    this.pedidos = [
      { id: '3', loja: "Italiano", data: '25/07/2017', valor: 'R$ 41,00', icon: "home" },
      { id: '2', loja: "Bestburguer", data: '20/07/2017', valor: 'R$ 145,00', icon: "home" },
      { id: '1', loja: "Italiano", data: '17/07/2017', valor: 'R$ 20,00', icon: "home" }
    ];*/
  }
  itemSelected(comida){
    this.navCtrl.push(DetalhePedido, 'oi');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoricoPedidos');
  }

}
