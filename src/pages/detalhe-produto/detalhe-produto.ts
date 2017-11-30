import { Component } from '@angular/core';
import { Camera } from 'ionic-native';
import { App, IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { Json } from '../../providers/json'

import { Produtos } from '../produtos/produtos';

/**
 * Generated class for the DetalheProduto page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-detalhe-produto',
  templateUrl: 'detalhe-produto.html',
})
export class DetalheProduto {
  data: any;
  base64Image:any;
  a = 0;
  categorias: any;
  private dados : FormGroup;
  constructor(private appCtrl: App, public json: Json, private formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
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
    
    this.data = this.navParams.get('produto_data');
    if (this.data !== 1){
      this.convertToDataURLviaCanvas('http://192.168.0.149:8000'+this.data.foto, "image/jpeg").then((base64) => {
        console.log(base64);
        this.base64Image = base64
      });
      this.dados = this.formBuilder.group({
        categoria: [this.data.categoria.id, Validators.required],
        nome: [this.data.nome, Validators.required],
        descricao: [this.data.descricao, Validators.required],
        valor: [this.data.valor, Validators.required],
        imagem: ['', Validators.required],
        status: [this.data.situacao, Validators.required],
      });
      this.a=1;
    } else {
      this.dados = this.formBuilder.group({
        categoria: ['', Validators.required],
        nome: ['', Validators.required],
        descricao: ['', Validators.required],
        valor: ['', Validators.required],
        imagem: ['', Validators.required],
        status: ['True', Validators.required],
      });
      this.a=2;
    }
  }

  chama(data, dados){
    if (this.a == 1){
      this.alterar(data, dados)
    } else {
      this.novo(dados)
    }
  }

  novo(dados){
    console.log('Novo Produto');
    let dat = {
      'categoria': dados.value.categoria,
      'nome': dados.value.nome,
      'descricao': dados.value.descricao,
      'valor': dados.value.valor,
      'situacao': dados.value.status,
      'foto': this.base64Image,
    };
    console.log(dat);
    this.json.novoProduto(dat);
    this.appCtrl.getRootNav().setRoot(Produtos);
  }

  alterar(data, dados){
    data.categoria = dados.value.categoria;
    data.categoria1 = dados.value.categoria;
    data.nome = dados.value.nome;
    data.descricao = dados.value.descricao;
    data.valor = dados.value.valor;
    data.situacao = dados.value.status;
    data.foto = this.base64Image;
    console.log(data);
    this.json.alterarProduto(data).then(dat => {
      if (dat != false){
        console.log('Sucesso ao atualizar produto')
        this.appCtrl.getRootNav().setRoot(Produtos);
      } else {
        console.log('Problema ao atualizar produto')
      }
    });
    
  }

  goback() {
    this.navCtrl.pop();
    console.log('Click para voltar aos produtos');
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheProduto');
  }

  accessGallery(){
    Camera.getPicture({
      sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
      destinationType: Camera.DestinationType.DATA_URL
     }).then((imageData) => {
       this.base64Image = 'data:image/jpeg;base64,'+imageData;
      }, (err) => {
       console.log(err);
     });
   }

  convertToDataURLviaCanvas(url, outputFormat){
    return new Promise((resolve, reject) => {
    let img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = () => {
      let canvas = <HTMLCanvasElement> document.createElement('CANVAS'),
        ctx = canvas.getContext('2d'),
        dataURL;
      canvas.height = img.height;
      canvas.width = img.width;
      ctx.drawImage(img, 0, 0);
      dataURL = canvas.toDataURL(outputFormat);
      resolve(dataURL);
      canvas = null;
    };
    img.src = url;
  });
}

}
