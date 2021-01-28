import { Component, OnInit } from '@angular/core';
import {Producto, ProductosService} from "../services/productos.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  product!: Producto;

  constructor(private _servicioProductos: ProductosService) { }

  ngOnInit(): void {
  }

  featuredProduct(index:number){
    this.product = this._servicioProductos.getProducto(index);
  }

}
