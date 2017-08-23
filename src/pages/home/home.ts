import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { Geo } from '../geo/geo';
import { TesteJson } from '../teste-json/teste-json';
import { Login } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  geo = Geo;
  json = TesteJson;
  login = Login;
  constructor(public navCtrl: NavController, public menuCtrl: MenuController, public navParams: NavParams) {
    
  }
  

  pushPage(){
    // push another page onto the navigation stack
    // causing the nav controller to transition to the new page
    // optional data can also be passed to the pushed page.
    this.navCtrl.push(Geo, {});
  }
}
