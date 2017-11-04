import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';

import { Recebimento } from '../recebimento/recebimento';

import { Json } from '../../providers/json'
import { Carrinho } from '../../providers/carrinho'
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
  constructor(private appCtrl: App, public navCtrl: NavController, public navParams: NavParams, public carrinho: Carrinho, public json: Json, public loadingCtrl: LoadingController) {
    var options = {
      enableHighAccuracy: true,
      timeout: 50000,
      maximumAge: 0
    };

    Geolocation.getCurrentPosition(options).then((data) => {
      //this.lat = data.coords.latitude;
      //this.lng = data.coords.longitude;
      console.log(data.coords.latitude + ' - ' +data.coords.longitude);
      this.json.getLojasData().subscribe(data1 => {
        this.lojas = [];
        for(var i = 0; i < data1.length; i++) {
          console.log(data1[i].latitude + ' - ' +data1[i].longitude);         
          var a = Math.pow(data.coords.latitude - data1[i].latitude, 2);
          var b = Math.pow(data.coords.longitude - data1[i].longitude, 2);
          
          if (Math.sqrt(a+b) < 30){
          this.lojas.push(
            {
              loja_data: data1[i]
            }
          );
        } else {
          console.log('Distancia maior que 30');
        }
        }
      });

  })
  .catch((error) => {
    console.log('Error getting location', error);
});
    
    const loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 1000);

    

    
  }

  itemSelected(loja){
    //Falta salvar pedido
    this.carrinho.loja = loja
    this.navCtrl.push(Recebimento);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeCliente');
  }
  atualizar(){
    this.appCtrl.getRootNav().setRoot(HomeCliente);
  }
}
