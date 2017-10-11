import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Checkout } from '../checkout/checkout';

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
  public comidas;
  private alert1 = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.comidas = [
      { nome: "comida1", icon: "home" },
      { nome: "comida2", icon: "information-circle" }
    ];
  }
  itemSelected(comida){

    const alert = this.alertCtrl.create({
      title: comida.nome,
      message: 'Qual a quantidade que deseja deste produto?',
      inputs: [
        {
          name: 'quantidade',
          placeholder: 'Quantidade'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirmar',
          role: 'cancel',
          handler: data => {
            if (data.quantidade) {
              //adicionar quantidade aqui
              this.alert1 = this.alertCtrl.create({
                title: comida.nome,
                subTitle: 'Produto adicionado com sucesso!!!',
                buttons: ['ok']
              });
              
              //lert1.onDidDismiss(() => this.navCtrl.push(Comida));
              return true;
            } else {
              console.log('Problema para inserir quantidade do produto');
              return false;
            }
          }
        }
      ]
    });
    alert.present();
    
    alert.onDidDismiss(() => this.verifica());

  }
  verifica(){
    if (this.alert1 != null){
      this.alert1.present();
      this.alert1.onDidDismiss(() => this.alert1 = null);
    }
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Comida');
  }

  checkout(){
    this.navCtrl.push(Checkout)
  }

}
