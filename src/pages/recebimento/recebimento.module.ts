import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Recebimento } from './recebimento';

@NgModule({
  declarations: [
    Recebimento,
  ],
  imports: [
    IonicPageModule.forChild(Recebimento),
  ],
  exports: [
    Recebimento
  ]
})
export class RecebimentoModule {}
