import { Component } from '@angular/core';
import { App, AlertController, IonicPage, NavController, NavParams, LoadingController,ToastController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { LoginProvider } from '../../providers/loginprovider'
import { Json } from '../../providers/json'

@IonicPage()
@Component({
  selector: 'page-dados-cliente',
  templateUrl: 'dados-cliente.html',
})
export class DadosCliente {
  data: any;
  a = 0;
  private dados : FormGroup;
  constructor(public alertCtrl: AlertController, private toastCtrl: ToastController, private appCtrl: App, private formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams, private json: Json, private lp: LoginProvider, public loadingCtrl: LoadingController) {
    this.dados = this.formBuilder.group({
      name: [lp.nome_cliente, Validators.required],
      email: [lp.email, Validators.required],
      senha: [lp.senha, Validators.nullValidator],
    });
  }

  atualiza(dados){
    console.log('Alterar dados do cliente');

    const loading = this.loadingCtrl.create({
      content: 'Atualizando.'
    });
  
    loading.present();

    let data = {
      'first_name': dados.value.name,
      'username': dados.value.email,
      'email': dados.value.email,
      'is_active': true,
      'codigo': this.lp.codigo,
      'password': dados.value.senha
    }
    console.log(data);
    this.json.alterarDadosCliente(data).then(dat => {
      loading.dismiss();
      if (dat != false){
        
        let toast = this.toastCtrl.create({
          message: 'Dados foram alterados!',
          duration: 2000,
          position: 'middle'
        });
      
        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });
        
        this.appCtrl.getRootNav().setRoot(DadosCliente);

        toast.present();

      } else {
        let confirm = this.alertCtrl.create({
          title: 'Erro ao alterar dados',
          message: 'Não foi possivel alterar dados no momento, verifique sua conexão e tente novamente mais tarde.',
          buttons: [
            {
              text: 'Ok',
              role: 'cancel',
              handler: () => {
                console.log('Botão ok precionado');
              }
            }
          ]
        });
        confirm.present();
      }
    });
    //this.appCtrl.getRootNav().setRoot(Categoria);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DadosCliente');
  }

}
