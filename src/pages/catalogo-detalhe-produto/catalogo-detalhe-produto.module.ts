import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CatalogoDetalheProduto } from './catalogo-detalhe-produto';

@NgModule({
  declarations: [
    CatalogoDetalheProduto,
  ],
  imports: [
    IonicPageModule.forChild(CatalogoDetalheProduto),
  ],
  exports: [
    CatalogoDetalheProduto
  ]
})
export class CatalogoDetalheProdutoModule {}
