import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Signup } from '../signup/signup';
import { HomePage } from '../home/home';

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
    private usercreds : FormGroup;
    signup = Signup;
    /*usercreds = {
            name: '',
            password: ''
    };*/
    jobs: any;
  constructor(private formBuilder: FormBuilder, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public loginprovider: LoginProvider) {
    this.usercreds = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  login(user) {
    console.log(user.value);
    this.loginprovider.authenticate(user).then(data => {
        if(data) {
            this.navCtrl.setRoot(HomePage);
        } else {
          var alert = this.alertCtrl.create({
            title: 'Falha',
            subTitle: 'Usuário ou Senha incorretos',
            buttons: ['ok']
        });
        alert.present();
        }
});
}

}
