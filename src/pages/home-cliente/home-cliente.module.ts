import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeCliente } from './home-cliente';

@NgModule({
  declarations: [
    HomeCliente,
  ],
  imports: [
    IonicPageModule.forChild(HomeCliente),
  ],
  exports: [
    HomeCliente
  ]
})
export class HomeClienteModule {}
