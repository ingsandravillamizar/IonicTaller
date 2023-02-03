import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-cuatro',
  templateUrl: './cuatro.page.html',
  styleUrls: ['./cuatro.page.scss'],
})
export class CuatroPage implements OnInit {

  tooggleValor:boolean;
  colorCard:string;
  estadoCard:boolean;
  ruta:string;
  cardTitle:string;
  cardSubtitle:string;
  cardContent:string;
   
  constructor() {
    this.tooggleValor = false;
    this.colorCard="primary";
    this.estadoCard= false;
    this.ruta = "";
    this.cardTitle="cardTitle";
    this.cardSubtitle="cardSubtitle";
    this.cardContent="cardContent";
 
    

   }
  
  

   inhabilitarCard()
   {
    if (this.tooggleValor == false){
      this.colorCard="light";
      this.estadoCard= false;
     
    }else{
      this.colorCard="dark";
      this.estadoCard= true;
    }
   
   }


  ngOnInit() {
  }

}
