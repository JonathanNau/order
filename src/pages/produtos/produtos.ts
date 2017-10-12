import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DetalheProduto } from '../detalhe-produto/detalhe-produto';

@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class Produtos {
  public produtos;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.produtos = [
    { nome: "Dog Atum", valor: "17,00", icon: "home" },
    { nome: "Dog Alcatra", valor: "19,00", icon: "home" },
    { nome: "Dog Azeitona", valor: "12,00", icon: "home" },
    { nome: "Dog Bauru", valor: "10,00", icon: "home" },
    { nome: "Dog Bacon", valor: "14,00", icon: "home" },
    { nome: "Dog Brócolis", valor: "12,00", icon: "home" },
    { nome: "Dog Calabresa", valor: "13,00", icon: "home" },
    { nome: "Dog Coração", valor: "15,00", icon: "home" },
    { nome: "Dog Egg", valor: "12,00", icon: "home" },
    { nome: "Dog Frango ao Molho", valor: "13,00", icon: "home" },
    { nome: "Dog Frango Crispy", valor: "14,00", icon: "home" },
    { nome: "Coca-cola", valor: "4,50", icon: "home" },
    { nome: "Pepsi", valor: "4,50", icon: "home" },
    { nome: "Sprite", valor: "4,50", icon: "home" },
    { nome: "Guaraná Antarctica", valor: "4,50", icon: "home" },
    { nome: "Skol Lata", valor: "5,00", icon: "home" },
    { nome: "Skol 600ml", valor: "10,00", icon: "home" },
    { nome: "Torre 1,5L", valor: "35,00", icon: "home" },
    { nome: "Torre 2,5L", valor: "49,00", icon: "home" },
    { nome: "Raiska", valor: "7,00", icon: "home" },
    { nome: "Passport", valor: "10,00", icon: "home" },
    { nome: "Johnie Walker Red", valor: "15,00", icon: "home" },
  ];
  }
  itemSelected(produto){
    this.navCtrl.push(DetalheProduto);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Produtos');
  }

}
