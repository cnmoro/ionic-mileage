import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = 'MeucarroPage';
  tab2Root: any = 'CalculadoraPage';
  
  constructor(public navCtrl: NavController) {
  }

}
