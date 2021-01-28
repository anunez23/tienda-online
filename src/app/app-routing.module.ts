import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {NosotrosComponent} from './components/nosotros/nosotros.component';
import {PerfilComponent} from './components/perfil/perfil.component';
import {ProductosComponent} from './components/productos/productos.component';
import {BuscadorComponent} from './components/buscador/buscador.component';
import {ProductoComponent} from './components/producto/producto.component';
import {CarritoCompraComponent} from "./components/carrito-compra/carrito-compra.component";
import {InicioSesionComponent} from "./components/inicio-sesion/inicio-sesion.component";
import {RegistroComponent} from "./components/registro/registro.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'search/:text', component: BuscadorComponent},
  {path: 'product/:index', component: ProductoComponent},
  {path: 'carrito', component:CarritoCompraComponent},
  {path: 'csession', component:InicioSesionComponent},
  {path: 'registro', component:RegistroComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
