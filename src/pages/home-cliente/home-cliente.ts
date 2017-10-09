import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Recebimento } from '../recebimento/recebimento';

import { Json } from '../../providers/json'
/**
 * Generated class for the HomeCliente page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home-cliente',
  templateUrl: 'home-cliente.html',
})
export class HomeCliente {
  lojas: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public json: Json) {
    this.json.getLojasData().subscribe(data => {
      this.lojas = [];
      for(var i = 0; i < data.length; i++) {         
        this.lojas.push(
          {
            loja_data: data[i]
          }
        );
      }
    });
  }

  itemSelected(loja){
    //Falta salvar pedido
    this.navCtrl.push(Recebimento);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeCliente');
  }

}
