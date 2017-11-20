import { Component } from '@angular/core';
import { App, LoadingController, IonicPage, NavController, NavParams } from 'ionic-angular';

import { Json } from '../../providers/json'

@IonicPage()
@Component({
  selector: 'page-recebimento-loja',
  templateUrl: 'recebimento-loja.html',
})
export class RecebimentoLoja {
  recebimentos;
  constructor(private appCtrl: App, public navCtrl: NavController, public navParams: NavParams, public json: Json, public loadingCtrl: LoadingController) {
    this.json.getRecebimentosLoja().subscribe(data => {
      this.recebimentos = [];

      for(var i = 0; i < data.length; i++) {
          this.recebimentos.push(
            {
              recebimento_data: data[i]
            }
          );
      }
      console.log(this.recebimentos);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecebimentoLoja');
  }

  updateItem(recebimento){
    console.log('Toggle alterado');
    const loading = this.loadingCtrl.create({
      content: 'Alterando status do recebimento. Por favor aguarde.'
    });
  
    loading.present();

    if (recebimento.recebimento_data.situacao == true){
      recebimento.recebimento_data.situacao = false;
    } else {
      recebimento.recebimento_data.situacao = true;
    }
    this.json.alterarRecebimento(recebimento.recebimento_data).then(data => {
      if (data){
        loading.dismiss();
        this.appCtrl.getRootNav().setRoot(RecebimentoLoja);
      }
    });
  }

}
