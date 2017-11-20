import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DetalhePedidoFechado } from '../detalhe-pedido-fechado/detalhe-pedido-fechado';

import { Json } from '../../providers/json'

@IonicPage()
@Component({
  selector: 'page-historico-pedidos-cliente',
  templateUrl: 'historico-pedidos-cliente.html',
})
export class HistoricoPedidosCliente {
  toggled: boolean;
  public pedidos;
  public pedidos1;
  searchTerm: string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams, public json: Json) {
    this.toggled = false;
    this.json.getPedidosCliente().subscribe(data => {
      this.pedidos = [];

      for(var i = 0; i < data.length; i++) {
        if (data[i].situacao == 'Concluido'){
          data[i].color = "secondary";
        } else if (data[i].situacao == 'Cancelado'){
          data[i].color = "danger"
        } else {
          data[i].color = "primary"
        }
        this.pedidos.push(
          {
            pedido_data: data[i]
          }
        );
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
        return String(item.pedido_data.loja.nome).toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });  

  }

  setFilteredItems() {
    
           this.pedidos1 = this.filterItems(this.searchTerm);
            
       }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoricoPedidosCliente');
  }

  itemSelected(pedido){
    this.navCtrl.push(DetalhePedidoFechado, pedido);
  }

}
