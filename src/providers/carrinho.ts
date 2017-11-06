import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class Carrinho {
  loja;
  itens;
  constructor(public http: Http) {
    console.log('Hello Carrinho Provider');
    this.itens = [];
  }

  setLoja(loja){
    this.loja = loja
  }

  getLoja(){
    return this.loja
  }

  adicionar_item(produto, quantidade){
    let existe_produto = false;
    for (let p of this.itens) {
      if (p.produto.id == produto.id){
        console.log('Produto já estava no carrinho, quantidade atualizada');
        existe_produto = true
        p.quantidade = quantidade
      }
    }
    if (!existe_produto){
      let item = {
        'produto': produto,
        'valor': produto.valor,
        'quantidade': quantidade
      };
      this.itens.push(item);
    }
    console.log(this.itens);
  }

  remover_item(produto){
    
    return new Promise(resolve => {
      this.itens = this.itens.filter(obj => obj !== produto);
      //this.itens.pop(produto);
      console.log('acho que consegui remover');
      resolve(true);
    });
  }

}
