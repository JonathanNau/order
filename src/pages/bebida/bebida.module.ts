import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Bebida } from './bebida';

@NgModule({
  declarations: [
    Bebida,
  ],
  imports: [
    IonicPageModule.forChild(Bebida),
  ],
  exports: [
    Bebida
  ]
})
export class BebidaModule {}
