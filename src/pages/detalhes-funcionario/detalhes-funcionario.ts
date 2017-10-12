import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-detalhes-funcionario',
  templateUrl: 'detalhes-funcionario.html',
})
export class DetalhesFuncionario {
  private dados : FormGroup;
  constructor(private formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
    this.dados = this.formBuilder.group({
      nome: ['João Pedro', Validators.required],
      telefone: ['33500694', Validators.required],
      password: ['naunau23', Validators.required],
      status: ['True', Validators.required],
    });
  }

  goback() {
    this.navCtrl.pop();
    console.log('Click para voltar aos funcionários');
 }

 alterar(data, dados){
  //faz a mágica de atualizar ou criar um novo
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesFuncionario');
  }

}
