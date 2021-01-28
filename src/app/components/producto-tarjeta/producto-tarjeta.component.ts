import {Component, Input, OnInit} from '@angular/core';
import {Producto} from '../services/productos.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-producto-tarjeta',
  templateUrl: './producto-tarjeta.component.html',
  styleUrls: ['./producto-tarjeta.component.css']
})
export class ProductoTarjetaComponent implements OnInit {
  @Input()product!:Producto;
  @Input()index!:number | undefined;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  viewProduct(){
    this.router.navigate(['product',this.index]);
  }

}
