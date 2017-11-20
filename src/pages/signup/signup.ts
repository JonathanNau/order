import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginProvider } from '../../providers/loginprovider'

import { Login } from '../login/login'

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
    user.codigo = 0;
    this.loginprovider.adduser(user).then(data => {
            if(data) {
                var alert = this.alertCtrl.create({
                    title: 'Usuário criado',
                    subTitle: 'Obrigado por se cadastrar, seu usuário foi criado e já está disponível para acessar o sistema.',
                    buttons: [
                      {
                        text: 'Ok',
                        handler: () => {
                          console.log('mensagem ok');
                          this.navCtrl.setRoot(Login);
                        }
                      }
                    ]
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
