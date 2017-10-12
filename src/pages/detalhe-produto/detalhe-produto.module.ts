import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalheProduto } from './detalhe-produto';

@NgModule({
  declarations: [
    DetalheProduto,
  ],
  imports: [
    IonicPageModule.forChild(DetalheProduto),
  ],
  exports: [
    DetalheProduto
  ]
})
export class DetalheProdutoModule {}
