import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams, AlertController, ViewController } from 'ionic-angular';

import { HistoricoPedidos } from '../historico-pedidos/historico-pedidos';

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class Checkout {
  public produtos;
  constructor(public appCtrl: App, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public viewCtrl: ViewController) {
    this.produtos = [
      { nome: "x-salada", quantidade: 3},
      { nome: "Dog Calabresa", quantidade: 2},
      { nome: "Coca", quantidade: 5}
    ];
  }
  checkout(){
    const alert = this.alertCtrl.create({
      title: "Pedido realizado com sucesso!!!!",
      subTitle: 'O número do seu pedido é: 3',
      buttons: [
        {
          text: 'Ok',
          handler: data => {
            this.navCtrl.setRoot(HistoricoPedidos);
          }
        }
      ]
    });
    alert.present();
    
    //direcionar para meus pedidos
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Checkout');
  }

}
