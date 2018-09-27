import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalculadoraPage } from './calculadora';

@NgModule({
  declarations: [
    CalculadoraPage,
  ],
  imports: [
    IonicPageModule.forChild(CalculadoraPage),
  ],
})
export class CalculadoraPageModule {}
