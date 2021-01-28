import { Component, OnInit } from '@angular/core';
import {Producto, ProductosService} from '../services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  products!: Producto[];

  constructor(private _productService:ProductosService) { }

  ngOnInit(): void {
    this.products = this._productService.getProductos();
  }

}
