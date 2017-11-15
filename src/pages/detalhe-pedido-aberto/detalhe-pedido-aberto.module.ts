import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhePedidoAberto } from './detalhe-pedido-aberto';

@NgModule({
  declarations: [
    DetalhePedidoAberto,
  ],
  imports: [
    IonicPageModule.forChild(DetalhePedidoAberto),
  ],
  exports: [
    DetalhePedidoAberto
  ]
})
export class DetalhePedidoAbertoModule {}
