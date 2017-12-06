import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CatalogoProduto } from '../catalogo-produto/catalogo-produto';

import { Json } from '../../providers/json'

@IonicPage()
@Component({
  selector: 'page-catalogo-categoria',
  templateUrl: 'catalogo-categoria.html',
})
export class CatalogoCategoria {
  categorias: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public json: Json) {
    this.json.getCategoriaLojaCatalogo().subscribe(data => {
      this.categorias = [];

      for(var i = 0; i < data.length; i++) {
        if (data[i].situacao == true){     
          this.categorias.push(
            {
              categoria_data: data[i]
            }
          );
        }
      }
      console.log(this.categorias);
    });
  }

  itemSelected(categoria){
    this.navCtrl.push(CatalogoProduto, categoria);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CatalogoCategoria');
  }

}
