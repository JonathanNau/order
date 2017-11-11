import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MenuController } from 'ionic-angular';
import { Signup } from '../signup/signup';
import { HomePage } from '../home/home';
import { HomeCliente } from '../home-cliente/home-cliente';

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
  cod;
  id;
  constructor(private formBuilder: FormBuilder, private menu: MenuController, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public loginprovider: LoginProvider) {
    this.menu.enable(false, 'menuAdministrador');
    this.usercreds = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.verifica_login();
  }

  cria_menu(){
    this.id = window.localStorage.getItem('user_order_id');
    this.cod = window.localStorage.getItem('user_order_cod');
    console.log(this.id);
    console.log(this.cod);
    if (this.cod == 1){
      this.menu.enable(true, 'menuLoja');
      this.navCtrl.setRoot(HomePage);
    } else if (this.cod == 2){
      this.menu.enable(true, 'menuFuncionario');
      this.navCtrl.setRoot(HomePage);
    } else if (this.cod == 3){
      this.menu.enable(true, 'menuAdministrador');
      this.navCtrl.setRoot(HomePage);
    } else {
      this.menu.enable(true, 'menuCliente');
      this.navCtrl.setRoot(HomeCliente);
    }
  }
  verifica_login() {
    this.loginprovider.getinfo().then(data => {
      if(data){
        this.loginprovider.loadDadosLoja(data).then(data1 => {
          if(data1){
            this.cria_menu();
          }
        });
        
        console.log('Verificado o login com sucesso pelo metodo GetInfo');
      } else {
        console.log('Problema com verificação do login pelo metodo GetInfo. Exigido login/senha');
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  login(user) {
    console.log(user.value);
    this.loginprovider.authenticate(user).then(data => {
      if(data) {
        console.log('Realizado login com sucesso');
        if (this.loginprovider.codigo == 1){
          this.loginprovider.loadDadosLoja(data).then(data1 => {
            this.cria_menu();
          });
        } else {
          this.cria_menu();
        }

        
        
      } else {
        console.log('Problema ao realizar login');
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
