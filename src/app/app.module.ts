import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/share/navbar/navbar.component';
import { FooterComponent } from './components/share/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import {ProductosService} from './components/services/productos.service';
import { ProductosComponent } from './components/productos/productos.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { ProductoTarjetaComponent } from './components/producto-tarjeta/producto-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    NosotrosComponent,
    PerfilComponent,
    ProductosComponent,
    BuscadorComponent,
    ProductoTarjetaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
