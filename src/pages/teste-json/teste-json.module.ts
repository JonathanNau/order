import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TesteJson } from './teste-json';
import { Http } from '@angular/http';

@NgModule({
  declarations: [
    TesteJson,
  ],
  imports: [
    IonicPageModule.forChild(TesteJson),
  ],
  exports: [
    TesteJson
  ]
})
export class TesteJsonModule {}
