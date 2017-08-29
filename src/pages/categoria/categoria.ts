import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Json } from '../../providers/json'
import { DetalheItem } from '../detalhe-item/detalhe-item';

@IonicPage()
@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html',
})
export class Categoria {
  categorias: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public json: Json) {
    this.json.getCategoriaData().subscribe(data => {
      this.categorias = [];

      for(var i = 0; i < data.length; i++) {
                  
        this.categorias.push(
          {
            categoria_data: data[i]
          }
        );
      }
      console.log(this.categorias);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Categoria');
  }

  itemSelected(categoria){
    this.navCtrl.push(DetalheItem, categoria);
  }

}
