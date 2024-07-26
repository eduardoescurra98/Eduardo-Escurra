import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasMainComponent } from './pages/peliculas-main/peliculas-main.component';

export const routes: Routes = [
    //, canActivate: [AuthGuardService]
    { path: 'peliculas', component: PeliculasMainComponent},
    { path: '', redirectTo: '/peliculas',pathMatch: 'full'}, // acá no va CanActive
     ];
  
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  
