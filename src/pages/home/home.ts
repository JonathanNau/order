import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { Geo } from '../geo/geo';
import { Login } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  geo = Geo;
  login = Login;
  cod;
  id;
  pages: Array<{title: string, component: any}>;
  constructor(public navCtrl: NavController, public menuCtrl: MenuController, public navParams: NavParams, public menu: MenuController) {
    var id = window.localStorage.getItem('user_order_id');
    var codUser = window.localStorage.getItem('user_order_cod');
    this.cod = codUser;
    this.id = id;
    if (this.cod == 1){
      this.menu.enable(true, 'menu2');
    } else if (this.cod == 2){
      this.menu.enable(true, 'menu3');
    } else if (this.cod == 3){
      this.menu.enable(true, 'menu1');
    } else {
      this.menu.enable(true, 'menu4');
    }
  }
  

  pushPage(){
    // push another page onto the navigation stack
    // causing the nav controller to transition to the new page
    // optional data can also be passed to the pushed page.
    this.navCtrl.push(Geo, {});
  }
}
