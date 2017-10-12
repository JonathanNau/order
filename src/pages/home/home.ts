import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geo } from '../geo/geo';
import { Login } from '../login/login';
import { DetalhePedido } from '../detalhe-pedido/detalhe-pedido';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public pedidos;
  geo = Geo;
  login = Login;
  cod;
  id;
  pages: Array<{title: string, component: any}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pedidos = [
      { id: '3', loja: "Italiano", status: 'Em andamento', valor: 'R$ 41,00', icon: "home" },
      { id: '1', loja: "Italiano", status: 'Finalizado', valor: 'R$ 20,00', icon: "home" }
    ];
  }
  itemSelected(comida){
    this.navCtrl.push(DetalhePedido, 'oi');
  }
  

  pushPage(){
    // push another page onto the navigation stack
    // causing the nav controller to transition to the new page
    // optional data can also be passed to the pushed page.
    this.navCtrl.push(Geo, {});
  }
}
