import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CatalogoDetalheProduto } from '../catalogo-detalhe-produto/catalogo-detalhe-produto';

import { Json } from '../../providers/json'

@IonicPage()
@Component({
  selector: 'page-catalogo-produto',
  templateUrl: 'catalogo-produto.html',
})
export class CatalogoProduto {
  public produtos;
  data;
  constructor(public navCtrl: NavController, public navParams: NavParams, private json: Json) {
    this.data = this.navParams.get('categoria_data');
    this.json.getProdutosClienteData(this.data.id).subscribe(data => {
      this.produtos = [];

      for(var i = 0; i < data.length; i++) {
        if (data[i].situacao == true){  
          this.produtos.push(
            {
              produto_data: data[i]
            }
          );
        }
      }
      console.log(this.produtos);
    });

  }

  itemSelected(produto){
    this.navCtrl.push(CatalogoDetalheProduto, produto);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CatalogoProduto');
  }

}
