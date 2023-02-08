import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  //importanmos

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  //priveta router: Router para hacer los redireccionamientos
  constructor(private router:Router) { 

  }

  ngOnInit() {
  }

  subMenu(){
    this.router.navigate(['/tabs'],{replaceUrl:true});
  }

}
