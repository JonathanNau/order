import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalheCategoria } from './detalhe-categoria';

@NgModule({
  declarations: [
    DetalheCategoria,
  ],
  imports: [
    IonicPageModule.forChild(DetalheCategoria),
  ],
  exports: [
    DetalheCategoria
  ]
})
export class DetalheCategoriaModule {}
