import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecebimentoLoja } from './recebimento-loja';

@NgModule({
  declarations: [
    RecebimentoLoja,
  ],
  imports: [
    IonicPageModule.forChild(RecebimentoLoja),
  ],
  exports: [
    RecebimentoLoja
  ]
})
export class RecebimentoLojaModule {}
