import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams, AlertController, ViewController } from 'ionic-angular';

import { HistoricoPedidos } from '../historico-pedidos/historico-pedidos';
import { Login } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class Checkout {
  public produtos;
  public valor_total;
  constructor(public appCtrl: App, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public viewCtrl: ViewController) {
    this.produtos = [
      { nome: "Dog Alcatra", quantidade: 1},
      { nome: "Dog Calabresa", quantidade: 1},
      { nome: "Coca-cola", quantidade: 2}
    ];
    this.valor_total = 41;
  }
  checkout(){
    const alert = this.alertCtrl.create({
      title: "Pedido realizado com sucesso!!!!",
      subTitle: 'O número do seu pedido é: 3',
      buttons: [
        {
          text: 'Ok',
          handler: data => {
            this.appCtrl.getRootNav().setRoot(HistoricoPedidos);
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
