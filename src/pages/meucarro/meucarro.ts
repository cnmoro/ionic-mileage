import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-meucarro',
  templateUrl: 'meucarro.html',
})
export class MeucarroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  goToModificaCarro() {
    this.navCtrl.push('PerfilPage');
  }

  goToSobre() {
    this.navCtrl.push('SobrePage');
  }
}
