import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ToastController } from "ionic-angular";
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: "page-perfil",
  templateUrl: "perfil.html"
})
export class PerfilPage {
  consumoEtanol: number;
  consumoGasolina: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public toastCtrl: ToastController
  ) {
    this.storage.get("consumoGasolina").then(val => {
      if (val) {
        this.consumoGasolina = val;
      } else {
        this.consumoGasolina = 0;
      }
    });
    this.storage.get("consumoEtanol").then(val => {
      if (val) {
        this.consumoEtanol = val;
      } else {
        this.consumoEtanol = 0;
      }
    });
  }

  ionViewDidLoad() {}

  salvarMudancas() {
    this.storage.set("consumoGasolina", this.consumoGasolina);
    this.storage.set("consumoEtanol", this.consumoEtanol);
    this.toastSucessoSalvo();
  }

  goToSobre() {
    this.navCtrl.push("SobrePage");
  }

  toastSucessoSalvo() {
    const toast = this.toastCtrl.create({
      message: "Informações salvas com sucesso",
      duration: 1000,
      position: "middle",
      cssClass: "toast-class"
    });
    toast.present();
  }
}
