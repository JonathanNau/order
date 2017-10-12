import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the Bebida page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-bebida',
  templateUrl: 'bebida.html',
})
export class Bebida {
  public bebidas;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.bebidas = [
      { nome: "Coca-cola", valor: "4,50", icon: "home" },
      { nome: "Pepsi", valor: "4,50", icon: "home" },
      { nome: "Sprite", valor: "4,50", icon: "home" },
      { nome: "Guaraná Antarctica", valor: "4,50", icon: "home" },
      { nome: "Skol Lata", valor: "5,00", icon: "home" },
      { nome: "Skol 600ml", valor: "10,00", icon: "home" },
      { nome: "Torre 1,5L", valor: "35,00", icon: "home" },
      { nome: "Torre 2,5L", valor: "49,00", icon: "home" },
      { nome: "Raiska", valor: "7,00", icon: "home" },
      { nome: "Passport", valor: "10,00", icon: "home" },
      { nome: "Johnie Walker Red", valor: "15,00", icon: "home" },
    ];
  }
  itemSelected(bebida){
    const alert = this.alertCtrl.create({
      title: bebida.nome,
      subTitle: 'Produto adicionado com sucesso!!!',
      buttons: ['ok']
    });
    alert.present();
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad Bebida');
  }

}
