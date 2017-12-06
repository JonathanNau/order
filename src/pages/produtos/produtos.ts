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
  public produtos1;
  toggled: boolean;
  searchTerm: string = '';

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
      this.setFilteredItems();
      console.log(this.produtos);
    });
  }

  searchToggle() {
    this.toggled = this.toggled ? false : true;
  }

  filterItems(searchTerm){
    console.log(searchTerm)
    return this.produtos.filter((item) => {
        return String(item.produto_data.nome).toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });  
  }

  setFilteredItems() {
    this.produtos1 = this.filterItems(this.searchTerm);
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
