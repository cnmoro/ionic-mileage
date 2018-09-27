import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeucarroPage } from './meucarro';

@NgModule({
  declarations: [
    MeucarroPage,
  ],
  imports: [
    IonicPageModule.forChild(MeucarroPage),
  ],
})
export class MeucarroPageModule {}
