import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { CarrinhoCategoria } from '../carrinho-categoria/carrinho-categoria';

import { Json } from '../../providers/json'
import { Carrinho } from '../../providers/carrinho'


@IonicPage()
@Component({
  selector: 'page-recebimento',
  templateUrl: 'recebimento.html',
})
export class Recebimento {
  public recebimentos;
  constructor(public json: Json, public carrinho: Carrinho,public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    console.log(this.carrinho.loja);
    this.json.getRecebimentos().subscribe(data => {
      this.recebimentos = [];
      console.log(data);
      for(var i = 0; i < data.length; i++) {

        this.recebimentos.push(
          {
            recebimento_data: data[i]
          }
        );
 
      }
    });
/*
    this.recebimentos = [
      { nome: "Mesa", icon: "home" },
      { nome: "Balcão", icon: "home" },
      { nome: "Carro", icon: "home" }
    ];*/
  }

  itemSelected(recebimento){
    //Salva meio de recebimento e continua no pedido
    if (recebimento.recebimento_data.nome == 'Mesa'){
      this.criarAlerta('Mesa', 'Qual sua mesa?', 'Digite o número da mesa');
    } else if (recebimento.recebimento_data.nome == 'Carro') {
      this.criarAlerta('Carro', 'Qual é seu carro?', 'Digite o número da placa.');
    } else {
      this.navCtrl.push(CarrinhoCategoria);
    }
    
  }

  criarAlerta(tipo, titulo, mensagem){
    const alert = this.alertCtrl.create({
      title: titulo,
      message: mensagem,
      inputs: [
        {
          name: 'valor',
          placeholder: tipo
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirmar',
          handler: data => {
            if (data.valor) {
              this.navCtrl.push(CarrinhoCategoria);
            } else {
              console.log('Problema para inserir mesa ou carro');
              return false;
            }
          }
        }
      ]
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Recebimento');
  }

}
