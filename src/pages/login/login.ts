import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Signup } from '../signup/signup';

import { LoginProvider } from '../../providers/loginprovider'

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
    signup = Signup;
    usercreds = {
            name: '',
            password: ''
    };
    jobs: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loginprovider: LoginProvider) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  login(user) {
      this.loginprovider.login(user).then(data => {
        if(data){
          console.log('oie')
          this.navCtrl.setRoot(Signup);
        } else {
          console.log('bye')
        }
      });
      
  }

}
