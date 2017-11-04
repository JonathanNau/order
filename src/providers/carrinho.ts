import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class Carrinho {
  loja;
  constructor(public http: Http) {
    console.log('Hello Carrinho Provider');

  }

  setLoja(loja){
    this.loja = loja
  }

  getLoja(){
    return this.loja
  }

}
