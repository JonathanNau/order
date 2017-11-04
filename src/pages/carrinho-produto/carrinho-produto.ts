import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Json } from '../../providers/json'

@IonicPage()
@Component({
  selector: 'page-carrinho-produto',
  templateUrl: 'carrinho-produto.html',
})
export class CarrinhoProduto {
  public produtos;
  data;
  constructor(public navCtrl: NavController, public navParams: NavParams, private json: Json) {
    this.data = this.navParams.get('categoria_data');
    this.json.getProdutosClienteData(this.data.id).subscribe(data => {
      this.produtos = [];

      for(var i = 0; i < data.length; i++) {
                  
        this.produtos.push(
          {
            produto_data: data[i]
          }
        );
      }
      console.log(this.produtos);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarrinhoProduto');
  }

}
