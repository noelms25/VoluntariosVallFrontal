import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { VoluntariosLimpieza } from './../Modelos/voluntariosLimpieza';
import { RestService } from './../rest.service';

@Component({
  selector: 'app-voluntarios-neteja',
  templateUrl: './voluntarios-neteja.component.html',
  styleUrls: ['./voluntarios-neteja.component.css']
})
export class VoluntariosNetejaComponent implements OnInit{

  isSubmitted = false;

  constructor(private router:Router, private formBuilder:FormBuilder, private restService:RestService

  ){

  }
  ngOnInit(): void {
  }

  public formVoluntariosLimpieza: FormGroup = this.formBuilder.group({
    getNombre: '',
    getApellidos: '',
    getTelefono: '',
    getCoche: ''
  });

  limpiar(){
    this.router.navigate(['/', 'voluntariosLimpieza']);
  }

  onSubmit() {
    this.isSubmitted = true;
    this.aceptar();
  }

  aceptar(){
    const voluntario:VoluntariosLimpieza = {
      nombre: this.formVoluntariosLimpieza.value.getNombre,
      apellidos: this.formVoluntariosLimpieza.value.getApellidos,
      telefono: this.formVoluntariosLimpieza.value.getTelefono,
      coche:this.formVoluntariosLimpieza.value.getCoche
    }
try{
  this.restService.saveVoluntarioLimpieza(voluntario).subscribe(data => 
    console.log(data)
  );
    //this.restService.get();
}
catch(Ex){
 console.log(Ex)
}
    
  }
}
