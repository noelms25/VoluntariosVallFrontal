 import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { VoluntariosNetejaComponent } from './voluntarios-neteja/voluntarios-neteja.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  // Ruta predeterminada
  { path: 'voluntariosLimpieza', component: VoluntariosNetejaComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
