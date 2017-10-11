import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhePedido } from './detalhe-pedido';

@NgModule({
  declarations: [
    DetalhePedido,
  ],
  imports: [
    IonicPageModule.forChild(DetalhePedido),
  ],
  exports: [
    DetalhePedido
  ]
})
export class DetalhePedidoModule {}
