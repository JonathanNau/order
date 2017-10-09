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
      { nome: "bebida1", icon: "home" },
      { nome: "bebida2", icon: "information-circle" }
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
