import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  pro = false;

  cmsInput = 0;
  cmsOutput = 0;
  cmsFrenteOutput1 = 0;
  cmsAtrasOutput1 = 0;
  cmsFrenteOutput2 = 0;
  cmsAtrasOutput2 = 0;

  cmsAdelanteInput = 0;
  cmsAtrasInput = 0;

  tipoCalc = "Modo Pro";
  titulo = "Erika Calculator";

  fondo = "background-color: #FFCEDE;";
  
  
  cmsAtras = "";
  cmsAdelante = "";
  constructor(private toastController:ToastController) {}

  async presentToast(position: 'top', message = "", color = "danger") {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: position,
      color : color,
    });

    await toast.present();
  }

  Calcular(){

    if(this.cmsInput > 0){
      
      let medidaInicial : number = this.cmsInput;
      let centimetrosAgregados : number = 8; // 4 cm de atras + 4 cm de adelante

      let unCuartoDeMediaTotal = (medidaInicial + centimetrosAgregados) / 2; //Se divide en 4 partes (2 de delante, 2 de atras)
      let totalAtras = unCuartoDeMediaTotal + 1 ;//se le suma 1 cm
      let totalFrente = unCuartoDeMediaTotal - 1 ; //se le resta 1 cm

      if(totalAtras + totalFrente === medidaInicial + centimetrosAgregados){
  
        this.cmsAtrasOutput1 = totalAtras / 2;
        this.cmsAtrasOutput2 =  this.cmsAtrasOutput1;
  
        this.cmsFrenteOutput1 = totalFrente / 2;
        this.cmsFrenteOutput2 =  this.cmsFrenteOutput1;
  
        this.cmsOutput = medidaInicial + centimetrosAgregados;

      }else{
      }
    }else{
      navigator.vibrate(1000);
      this.presentToast("top","Colocar un numero mayor a 0");
    }
  }

  CalculoPro(){

    if(this.cmsInput > 0){
      if(this.cmsAdelanteInput > 0){
        if(this.cmsAtrasInput > 0){
          let medidaInicial : number = this.cmsInput;
          let centimetrosAgregados : number = this.cmsAdelanteInput + this.cmsAtrasInput; //  cm de atras +  cm de adelante
    
          let unCuartoDeMediaTotal = (medidaInicial + centimetrosAgregados) / 2; //Se divide en 4 partes (2 de delante, 2 de atras)
          let totalAtras = unCuartoDeMediaTotal + 1 ;//se le suma 1 cm
          let totalFrente = unCuartoDeMediaTotal - 1 ; //se le resta 1 cm
    
          if(totalAtras + totalFrente === medidaInicial + centimetrosAgregados){
      
            this.cmsAtrasOutput1 = totalAtras / 2;
            this.cmsAtrasOutput2 =  this.cmsAtrasOutput1;
      
            this.cmsFrenteOutput1 = totalFrente / 2;
            this.cmsFrenteOutput2 =  this.cmsFrenteOutput1;
      
            this.cmsOutput = medidaInicial + centimetrosAgregados;

            this.cmsAdelante =  this.cmsFrenteOutput1 + "cm + " + this.cmsFrenteOutput1 + "cm";
            this.cmsAtras = this.cmsAtrasOutput1 + "cm + " + this.cmsAtrasOutput1 + "cm";
           
          }
        }else{
          navigator.vibrate(1000);
          this.presentToast("top","Colocar centimetros de atras mayor a 0");
        }
      }else{
        navigator.vibrate(1000);
        this.presentToast("top","Colocar centimetros de adelante mayor a 0");
      }
      
    }else{
      navigator.vibrate(1000);
      this.presentToast("top","Colocar un numero mayor a 0");
    }
  }

  Calculadora(){
    if(this.pro){
      this.pro = false;
      this.titulo = "Erika Calculator";
      this.tipoCalc = "Modo Pro";
      this.fondo = "background-color: #FFCEDE;";
      this.Reiniciar()
    }else{
      this.pro = true;
      this.titulo = "Erika Calculator Pro";
      this.tipoCalc = "Modo Normal";
      this.fondo = "background-color: #FFCEDE;";
      this.Reiniciar()
    } 
  }

  Reiniciar(){
    this.cmsInput = 0;
    this.cmsOutput = 0;
    this.cmsFrenteOutput1 = 0;
    this.cmsAtrasOutput1 = 0;
    this.cmsFrenteOutput2 = 0;
    this.cmsAtrasOutput2 = 0;
    this.cmsAdelanteInput = 0;
    this.cmsAtrasInput = 0;
    this.cmsAtras = "";
    this.cmsAdelante = "";
  }


}
