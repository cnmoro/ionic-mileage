import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  LoadingController
} from "ionic-angular";
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: "page-calculadora",
  templateUrl: "calculadora.html"
})
export class CalculadoraPage {
  private loading;

  esconderResultado = true;
  resultadoCalculo = "";
  resultadoExplicacao = "";

  // precoGasolina: number;
  // precoEtanol: number;

  consumoEtanol: number;
  consumoGasolina: number;

  precoEtanol = 0;
  precoGasolina = 0;

  // consumoEtanol = 9.5;
  // consumoGasolina = 12.5;

  reaisPorKmGas;
  reaisPorKmEta;

  hideGasolina = true;
  hideEtanol = true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public storage: Storage
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
    this.storage.get("precoGasolina").then(val => {
      if (val) {
        this.precoGasolina = val;
      } else {
        this.precoGasolina = 0;
      }
    });
    this.storage.get("precoEtanol").then(val => {
      if (val) {
        this.precoEtanol = val;
      } else {
        this.precoEtanol = 0;
      }
    });
  }

  ionViewDidLoad() {}

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: "Calculando.."
    });

    this.loading.present();

    setTimeout(() => {
      this.hideLoading();
      this.calcularCustoBeneficio();
    }, 1000);
  }

  hideLoading() {
    if (this.loading) {
      this.loading.dismiss();
      this.loading = null;
    }
  }

  calcularCustoBeneficio() {
    if (!isNaN(this.precoEtanol) && !isNaN(this.precoGasolina)) {
      let litrosParaUmKmGas = 1 / this.consumoGasolina;
      let litrosParaUmKmEta = 1 / this.consumoEtanol;

      this.reaisPorKmGas = (litrosParaUmKmGas * this.precoGasolina).toFixed(2);
      this.reaisPorKmEta = (litrosParaUmKmEta * this.precoEtanol).toFixed(2);

      if (this.reaisPorKmGas < this.reaisPorKmEta) {
        this.resultadoCalculo = "a GASOLINA";
        this.resultadoExplicacao =
          "O preço da gasolina por quilômetro rodado é de R$" +
          this.reaisPorKmGas +
          ". Enquanto o preço por quilômetro do etanol é de R$" +
          this.reaisPorKmEta +
          ".";
        this.hideGasolina = false;
        this.hideEtanol = true;
      } else {
        this.resultadoCalculo = "o ETANOL";
        this.resultadoExplicacao =
          "O preço do etanol por quilômetro rodado é de R$" +
          this.reaisPorKmEta +
          ". Enquanto o preço por quilômetro da gasolina é de R$" +
          this.reaisPorKmGas +
          ".";
        this.hideGasolina = true;
        this.hideEtanol = false;
      }

      this.esconderResultado = false;
      this.salvarMudancas();
    } else {
      this.esconderResultado = true;
      this.toastErro();
    }
  }

  salvarMudancas() {
    this.storage.set("precoGasolina", this.precoGasolina);
    this.storage.set("precoEtanol", this.precoEtanol);
  }

  toastErro() {
    const toast = this.toastCtrl.create({
      message: "Dados inválidos",
      duration: 1000,
      position: "middle",
      cssClass: "toast-class"
    });
    toast.present();
  }

  goToSobre() {
    this.navCtrl.push("SobrePage");
  }
}
