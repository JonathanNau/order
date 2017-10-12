import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhesFuncionario } from './detalhes-funcionario';

@NgModule({
  declarations: [
    DetalhesFuncionario,
  ],
  imports: [
    IonicPageModule.forChild(DetalhesFuncionario),
  ],
  exports: [
    DetalhesFuncionario
  ]
})
export class DetalhesFuncionarioModule {}
