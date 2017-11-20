import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DetalhesFuncionario } from '../detalhes-funcionario/detalhes-funcionario';

import { LoginProvider } from '../../providers/loginprovider'
import { Json } from '../../providers/json'

@IonicPage()
@Component({
  selector: 'page-funcionarios',
  templateUrl: 'funcionarios.html',
})
export class Funcionarios {
  public funcionarios;
  constructor(public navCtrl: NavController, public navParams: NavParams, public json: Json, private lp: LoginProvider) {

    this.json.getFuncionariosData().subscribe(data => {
      this.funcionarios = [];

      for(var i = 0; i < data.length; i++) {
        //erro no código - verificar
        if (data[i].usuario.id == lp.id){
          
        } else {
          if (data[i].usuario.is_active == true){
            data[i].color = "secondary"
          } else {
            data[i].color = "danger"
          }
          this.funcionarios.push(
            { 
              funcionarios_data: data[i]
            }
          );
        }
      }
      console.log(this.funcionarios);
    });
  }
  itemSelected(funcionario){
    this.navCtrl.push(DetalhesFuncionario ,funcionario);
  }

  novo_funcionario(){
    this.navCtrl.push(DetalhesFuncionario, {funcionarios_data: 1});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Funcionarios');
  }

}
