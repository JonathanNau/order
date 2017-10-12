import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DetalhesFuncionario } from '../detalhes-funcionario/detalhes-funcionario';
/**
 * Generated class for the Funcionarios page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-funcionarios',
  templateUrl: 'funcionarios.html',
})
export class Funcionarios {
  public funcionarios;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.funcionarios = [
      { nome: "João Pedro", icon: "home" },
      { nome: "João Guilherme", icon: "home" },
    ];
  }
  itemSelected(funcionario){
    this.navCtrl.push(DetalhesFuncionario);
  }

  novo_funcionario(){
    this.navCtrl.push(DetalhesFuncionario);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Funcionarios');
  }

}
