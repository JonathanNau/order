import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Geo } from './geo';

@NgModule({
  declarations: [
    Geo,
  ],
  imports: [
    IonicPageModule.forChild(Geo),
  ],
  exports: [
    Geo
  ]
})
export class GeoModule {}
