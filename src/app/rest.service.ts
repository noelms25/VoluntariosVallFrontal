import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VoluntariosLimpieza } from './Modelos/voluntariosLimpieza';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }

  url: string = 'https://voluntarios-089n.onrender.com/addVoluntario';

  public saveVoluntarioLimpieza(voluntario: VoluntariosLimpieza){
    let body = {
      "empId": "1",
      'nombre':voluntario.nombre,
      'apellidos':voluntario.apellidos,
      'telefono':voluntario.telefono,
      'coche':voluntario.coche
    }
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    console.log(body)
    return this.http.post(this.url, body, { headers: headers })
  }

  public get(){
    this.http.get('https://voluntarios-089n.onrender.com/voluntarios/S');
  }
}
