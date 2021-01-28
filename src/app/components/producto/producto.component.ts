import { Component, OnInit } from '@angular/core';
import {Producto, ProductosService} from '../services/productos.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  product!: Producto;

  constructor(private activatedRoute: ActivatedRoute, private _productService:ProductosService) {
    this.activatedRoute.params.subscribe(parametros=>{
      this.product = this._productService.getProducto(parametros["index"]);
    })
  }

  ngOnInit(): void {
  }

}
