import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Funcionarios } from './funcionarios';

@NgModule({
  declarations: [
    Funcionarios,
  ],
  imports: [
    IonicPageModule.forChild(Funcionarios),
  ],
  exports: [
    Funcionarios
  ]
})
export class FuncionariosModule {}
