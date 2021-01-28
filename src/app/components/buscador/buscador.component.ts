import { Component, OnInit } from '@angular/core';
import {Producto, ProductosService} from '../services/productos.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  productFound!:Producto[];
  searchText!:string;

  constructor(private _productService:ProductosService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(parametros => {
      this.searchText = parametros["text"];
      this.productFound = this._productService.productSearch(parametros["text"]);
    })
  }

}
