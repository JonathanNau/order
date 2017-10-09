import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Comida } from '../comida/comida';
import { Bebida } from '../bebida/bebida';

/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tabs-page',
  templateUrl: 'tabs-page.html',
})
export class TabsPage {
  public tabs;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tabs = [
      { title: "Comida", root: Comida, icon: "home" },
      { title: "Bebida", root: Bebida, icon: "information-circle" }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
