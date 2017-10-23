import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { QueComponent } from './components/que/que.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { ServicioComponent } from './components/servicio/servicio.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'que', component: QueComponent },
    { path: 'galeria', component: GaleriaComponent },
    { path: 'servicio', component: ServicioComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

