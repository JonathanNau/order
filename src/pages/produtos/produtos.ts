import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DetalheProduto } from '../detalhe-produto/detalhe-produto';

import { Json } from '../../providers/json'

@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class Produtos {
  public produtos;
  constructor(public navCtrl: NavController, public navParams: NavParams, private json: Json) {
    this.json.getProdutosData().subscribe(data => {
      this.produtos = [];

      for(var i = 0; i < data.length; i++) {
        if (data[i].situacao == true){
          data[i].color = "secondary"
        } else {
          data[i].color = "danger"
        }        
        this.produtos.push(
          {
            produto_data: data[i]
          }
        );
      }
      console.log(this.produtos);
    });
  }

  itemSelected(produto){
    this.navCtrl.push(DetalheProduto, produto);
  }

  novo_produto(produto){
    this.navCtrl.push(DetalheProduto, {produto_data: 1});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Produtos');
  }

}
