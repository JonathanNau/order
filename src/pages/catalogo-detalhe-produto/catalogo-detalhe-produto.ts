import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CatalogoDetalheProduto page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-catalogo-detalhe-produto',
  templateUrl: 'catalogo-detalhe-produto.html',
})
export class CatalogoDetalheProduto {
  data;
  imagem = '';
  valor_total;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = this.navParams.get('produto_data');
    this.imagem = 'http://54.87.228.88/Project'+this.data.foto
    console.log(this.data);
    this.valor_total = this.data.valor;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CatalogoDetalheProduto');
  }

}
