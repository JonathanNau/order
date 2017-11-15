import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalheItemPedidoAberto } from './detalhe-item-pedido-aberto';

@NgModule({
  declarations: [
    DetalheItemPedidoAberto,
  ],
  imports: [
    IonicPageModule.forChild(DetalheItemPedidoAberto),
  ],
  exports: [
    DetalheItemPedidoAberto
  ]
})
export class DetalheItemPedidoAbertoModule {}
