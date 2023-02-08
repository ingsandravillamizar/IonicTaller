import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  //importanmos
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  //priveta router: Router para hacer los redireccionamientos
  constructor(private router:Router, private alertController: AlertController ) { 

  }

  ngOnInit() {
  }

  subMenu(path:string){

    this.router.navigate([path],{replaceUrl:true});
  }


 async presentAlert() {
  const alert = await this.alertController.create({
    header: 'Alert',
    subHeader: 'Subtitle',
    message: 'This is an alert message.',
    buttons: [{
          text: 'Ruta 3',
          handler :()=>{
            this.subMenu('/tabs/ruta-tres');
          }
    },
     
    {
      text: 'Ruta 4',
      handler: ()=>{this.subMenu('/tabs/ruta-cuatro');}
      
}]
  });

  await alert.present();
}
}
