import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CatalogoCategoria } from './catalogo-categoria';

@NgModule({
  declarations: [
    CatalogoCategoria,
  ],
  imports: [
    IonicPageModule.forChild(CatalogoCategoria),
  ],
  exports: [
    CatalogoCategoria
  ]
})
export class CatalogoCategoriaModule {}
