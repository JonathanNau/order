import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoricoPedidos } from './historico-pedidos';

@NgModule({
  declarations: [
    HistoricoPedidos,
  ],
  imports: [
    IonicPageModule.forChild(HistoricoPedidos),
  ],
  exports: [
    HistoricoPedidos
  ]
})
export class HistoricoPedidosModule {}
