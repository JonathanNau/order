import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DadosLoja } from './dados-loja';

@NgModule({
  declarations: [
    DadosLoja,
  ],
  imports: [
    IonicPageModule.forChild(DadosLoja),
  ],
  exports: [
    DadosLoja
  ]
})
export class DadosLojaModule {}
