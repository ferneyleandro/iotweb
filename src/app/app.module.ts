import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { QueComponent } from './components/que/que.component';

import { APP_ROUTING } from './app.routes';
import { ServicioComponent } from './components/servicio/servicio.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    GaleriaComponent,
    QueComponent,
    ServicioComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
