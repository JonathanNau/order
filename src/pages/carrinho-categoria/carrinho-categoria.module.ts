import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarrinhoCategoria } from './carrinho-categoria';

@NgModule({
  declarations: [
    CarrinhoCategoria,
  ],
  imports: [
    IonicPageModule.forChild(CarrinhoCategoria),
  ],
  exports: [
    CarrinhoCategoria
  ]
})
export class CarrinhoCategoriaModule {}
