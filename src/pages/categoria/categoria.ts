import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Json } from '../../providers/json'
import { DetalheCategoria } from '../detalhe-categoria/detalhe-categoria';

@IonicPage()
@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html',
})
export class Categoria {
  public categorias;
  public categorias1;
  toggled: boolean;
  searchTerm: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public json: Json) {
    this.toggled = false;
    this.json.getCategoriaData().subscribe(data => {
      this.categorias = [];
      for(var i = 0; i < data.length; i++) {
        if (data[i].situacao == true){
          data[i].color = "secondary"
        } else {
          data[i].color = "danger"
        }                  
        this.categorias.push(
          {
            categoria_data: data[i]
          }
        );
      }
      this.setFilteredItems();
      console.log(this.categorias);
    });
  }

  searchToggle() {
    this.toggled = this.toggled ? false : true;
  }

  filterItems(searchTerm){
    console.log(searchTerm)
    return this.categorias.filter((item) => {
        return String(item.categoria_data.nome).toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });  
  }

  setFilteredItems() {
    this.categorias1 = this.filterItems(this.searchTerm);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Categoria');
  }

  itemSelected(categoria){
    this.navCtrl.push(DetalheCategoria, categoria);
  }

  nova_categoria(){
    this.navCtrl.push(DetalheCategoria, {categoria_data: 1});
  }

}
