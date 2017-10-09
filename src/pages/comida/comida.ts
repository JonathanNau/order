import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the Comida page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-comida',
  templateUrl: 'comida.html',
})
export class Comida {
  public comidas
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.comidas = [
      { nome: "comida1", icon: "home" },
      { nome: "comida2", icon: "information-circle" }
    ];
  }
  itemSelected(comida){
    const alert = this.alertCtrl.create({
      title: comida.nome,
      subTitle: 'Produto adicionado com sucesso!!!',
      buttons: ['ok']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Comida');
  }

}
