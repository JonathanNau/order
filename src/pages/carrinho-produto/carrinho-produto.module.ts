import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarrinhoProduto } from './carrinho-produto';

@NgModule({
  declarations: [
    CarrinhoProduto,
  ],
  imports: [
    IonicPageModule.forChild(CarrinhoProduto),
  ],
  exports: [
    CarrinhoProduto
  ]
})
export class CarrinhoProdutoModule {}
