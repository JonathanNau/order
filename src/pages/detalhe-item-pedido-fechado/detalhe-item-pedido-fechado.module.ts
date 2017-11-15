import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalheItemPedidoFechado } from './detalhe-item-pedido-fechado';

@NgModule({
  declarations: [
    DetalheItemPedidoFechado,
  ],
  imports: [
    IonicPageModule.forChild(DetalheItemPedidoFechado),
  ],
  exports: [
    DetalheItemPedidoFechado
  ]
})
export class DetalheItemPedidoFechadoModule {}
