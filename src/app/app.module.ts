import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

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
import { ProductoComponent } from './components/producto/producto.component';
import {registerLocaleData} from "@angular/common";
import localES from '@angular/common/locales/es';
import { CarritoCompraComponent } from './components/carrito-compra/carrito-compra.component';
import { RegistroComponent } from './components/registro/registro.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';

registerLocaleData(localES);

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
    ProductoComponent,
    CarritoCompraComponent,
    RegistroComponent,
    InicioSesionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductosService,
    {
      provide: LOCALE_ID,
      useValue:'es'
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
