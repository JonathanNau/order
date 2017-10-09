import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs-page/tabs-page';

/**
 * Generated class for the Recebimento page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-recebimento',
  templateUrl: 'recebimento.html',
})
export class Recebimento {
  public recebimentos;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.recebimentos = [
      { nome: "Mesa", icon: "home" },
      { nome: "Balcão", icon: "home" },
      { nome: "Carro", icon: "home" }
    ];
  }

  itemSelected(recebimento){
    //Salva meio de recebimento e continua no pedido
    if (recebimento.nome == 'Mesa'){
      this.criarAlerta('Mesa', 'Qual sua mesa?', 'Digite o número da mesa');
    } else if (recebimento.nome == 'Carro') {
      this.criarAlerta('Carro', 'Qual é seu carro?', 'Digite o número da placa.');
    } else {
      this.navCtrl.push(TabsPage);
    }
    
  }

  criarAlerta(tipo, titulo, mensagem){
    const alert = this.alertCtrl.create({
      title: titulo,
      message: mensagem,
      inputs: [
        {
          name: 'valor',
          placeholder: tipo
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
          handler: data => {
            if (data.valor) {
              this.navCtrl.push(TabsPage);
            } else {
              console.log('Problema para inserir mesa ou carro');
              return false;
            }
          }
        }
      ]
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Recebimento');
  }

}
