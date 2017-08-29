import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalheItem page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-detalhe-item',
  templateUrl: 'detalhe-item.html',
})
export class DetalheItem {
  data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = this.navParams.get('categoria_data');
    console.log(this.data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheItem');
  }

}
