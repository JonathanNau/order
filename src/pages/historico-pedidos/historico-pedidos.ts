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
  toggled: boolean;
  public pedidos;
  public pedidos1;
  searchTerm: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public json: Json) {
    this.toggled = false;
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
      this.setFilteredItems();
      console.log(this.pedidos);
    });

  }

  searchToggle() {
    this.toggled = this.toggled ? false : true;
  }

  filterItems(searchTerm){
    console.log(searchTerm)
    return this.pedidos.filter((item) => {
        return String(item.pedido_data.usuario.first_name).toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });  
  }

  setFilteredItems() {
    this.pedidos1 = this.filterItems(this.searchTerm);
  }

  itemSelected(pedido){
    this.navCtrl.push(DetalhePedidoFechado, pedido);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoricoPedidos');
  }

}
