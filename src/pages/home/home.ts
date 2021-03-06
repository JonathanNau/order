import { Component } from '@angular/core';
import { Camera } from 'ionic-native';

import { NavController, NavParams } from 'ionic-angular';
import { Geo } from '../geo/geo';
import { Login } from '../login/login';
import { DetalhePedido } from '../detalhe-pedido/detalhe-pedido';
import { DetalhePedidoAberto } from '../detalhe-pedido-aberto/detalhe-pedido-aberto';

import { Json } from '../../providers/json'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  base64Image:any;
  public pedidos;
  geo = Geo;
  login = Login;
  cod;
  id;
  pages: Array<{title: string, component: any}>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public json: Json) {
    this.json.getPedidosLoja().subscribe(data => {
      this.pedidos = [];

      for(var i = 0; i < data.length; i++) {
        if (data[i].situacao == 'Pendente'){     
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
    this.navCtrl.push(DetalhePedidoAberto, pedido);
  }
  

  pushPage(){
    // push another page onto the navigation stack
    // causing the nav controller to transition to the new page
    // optional data can also be passed to the pushed page.
    this.navCtrl.push(Geo, {});
  }
}
