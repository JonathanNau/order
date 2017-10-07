import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DadosCliente } from './dados-cliente';

@NgModule({
  declarations: [
    DadosCliente,
  ],
  imports: [
    IonicPageModule.forChild(DadosCliente),
  ],
  exports: [
    DadosCliente
  ]
})
export class DadosClienteModule {}
