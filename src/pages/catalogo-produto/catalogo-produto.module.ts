import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CatalogoProduto } from './catalogo-produto';

@NgModule({
  declarations: [
    CatalogoProduto,
  ],
  imports: [
    IonicPageModule.forChild(CatalogoProduto),
  ],
  exports: [
    CatalogoProduto
  ]
})
export class CatalogoProdutoModule {}
