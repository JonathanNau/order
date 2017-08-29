import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalheItem } from './detalhe-item';

@NgModule({
  declarations: [
    DetalheItem,
  ],
  imports: [
    IonicPageModule.forChild(DetalheItem),
  ],
  exports: [
    DetalheItem
  ]
})
export class DetalheItemModule {}
