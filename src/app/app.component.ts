import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VoluntariosVallDana';

  constructor(private router:Router){

  }

  limpiar(){
    this.router.navigate(['/', 'voluntariosLimpieza']);
  }
}
