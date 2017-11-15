import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhePedidoFechado } from './detalhe-pedido-fechado';

@NgModule({
  declarations: [
    DetalhePedidoFechado,
  ],
  imports: [
    IonicPageModule.forChild(DetalhePedidoFechado),
  ],
  exports: [
    DetalhePedidoFechado
  ]
})
export class DetalhePedidoFechadoModule {}
