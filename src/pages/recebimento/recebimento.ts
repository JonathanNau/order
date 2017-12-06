import { ViewChild, Component } from '@angular/core';
import { Navbar, IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { CarrinhoCategoria } from '../carrinho-categoria/carrinho-categoria';

import { Json } from '../../providers/json'
import { Carrinho } from '../../providers/carrinho'


@IonicPage()
@Component({
  selector: 'page-recebimento',
  templateUrl: 'recebimento.html',
})
export class Recebimento {
  @ViewChild(Navbar) navBar: Navbar;
  public recebimentos;
  constructor(public json: Json, public carrinho: Carrinho,public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    console.log(this.carrinho.loja);
    this.json.getRecebimentos().subscribe(data => {
      this.recebimentos = [];
      console.log(data);
      for(var i = 0; i < data.length; i++) {
        if (data[i].situacao == true){
          this.recebimentos.push(
            {
              recebimento_data: data[i]
            }
          );
        }
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
    this.carrinho.tipo_recebimento = recebimento.recebimento_data;
    
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
              this.carrinho.valor_recebimento = data.valor;
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
    this.navBar.backButtonClick = (e:UIEvent)=>{
      // todo something
      console.log('executar o bagulho louco de voltar');
      let alert = this.alertCtrl.create({
        title: 'Sair do pedido',
        message: 'Deseja sair do Pedido?',
        buttons: [
          {
            text: 'Não',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Sim',
            handler: () => {
              this.carrinho.itens = [];
              this.navCtrl.pop();
            }
          }
        ]
      });
      alert.present();
     }
  }

}
