import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HistoricoPedidos page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-historico-pedidos',
  templateUrl: 'historico-pedidos.html',
})
export class HistoricoPedidos {
  public pedidos;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pedidos = [
      { id: '3', loja: "Italiano", data: '25/07/2017', valor: 'R$ 45,00', icon: "home" },
      { id: '2', loja: "Cako", data: '20/07/2017', valor: 'R$ 145,00', icon: "home" },
      { id: '1', loja: "Italiano", data: '17/07/2017', valor: 'R$ 20,00', icon: "home" }
    ];
  }
  itemSelected(comida){
    //Detalhe do item
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoricoPedidos');
  }

}
