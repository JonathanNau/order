import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoricoPedidosCliente } from './historico-pedidos-cliente';

@NgModule({
  declarations: [
    HistoricoPedidosCliente,
  ],
  imports: [
    IonicPageModule.forChild(HistoricoPedidosCliente),
  ],
  exports: [
    HistoricoPedidosCliente
  ]
})
export class HistoricoPedidosClienteModule {}
