import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  
  // consumoEtanol: number;
  // consumoGasolina: number;

  consumoEtanol = 9.5;
  consumoGasolina = 12.5;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //popular as variaveis com valores do storage
  }

  ionViewDidLoad() {
  }

  salvarMudancas() {
    //salva no storage
  }

  goToSobre() {
    this.navCtrl.push('SobrePage');
  }

}
