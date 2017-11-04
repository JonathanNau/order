import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarrinhoProdutoDetalhe } from './carrinho-produto-detalhe';

@NgModule({
  declarations: [
    CarrinhoProdutoDetalhe,
  ],
  imports: [
    IonicPageModule.forChild(CarrinhoProdutoDetalhe),
  ],
  exports: [
    CarrinhoProdutoDetalhe
  ]
})
export class CarrinhoProdutoDetalheModule {}
