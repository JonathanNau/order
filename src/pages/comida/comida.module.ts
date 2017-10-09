import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Comida } from './comida';

@NgModule({
  declarations: [
    Comida,
  ],
  imports: [
    IonicPageModule.forChild(Comida),
  ],
  exports: [
    Comida
  ]
})
export class ComidaModule {}
