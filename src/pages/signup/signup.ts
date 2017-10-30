import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginProvider } from '../../providers/loginprovider'
/**
 * Generated class for the Signup page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class Signup {
  usercreds = {
            name: '',
            password: ''
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, public loginprovider: LoginProvider, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup');
  }

  register(user) {
    this.loginprovider.adduser(user).then(data => {
            if(data) {
                var alert = this.alertCtrl.create({
                    title: 'Success',
                    subTitle: 'User Created',
                    buttons: ['ok']
                });
                alert.present();
            }
    });
    console.log(user)
  }
  goback() {
    this.navCtrl.pop();
    console.log('Click para voltar aos produtos');
 }
}
