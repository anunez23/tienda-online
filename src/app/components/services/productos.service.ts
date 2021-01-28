

import {Injectable} from '@angular/core';

/*Crea el modelo a seguir todos los producto*/
export interface Producto{
  nombre:string,
  precio:number,
  descripcion:string,
  fechconpref:number,
  alergeno?:string,
  imagen:string,
  id?:number
}

/*Productos tienda*/
@Injectable()
export class ProductosService{
  private productos:Producto[]=[
    {
      nombre:'Mermelada de fresa',
      precio:2.5,
      descripcion:'Su sabor y aroma la hace especial para desayunos, yogures y como acompañamiento en ensaladas frías y elaboración de repostería.',
      fechconpref: 5,
      alergeno: 'Sin alergenos',
      imagen: 'assets/images/mermelada_fresa.png'
    },
    {
      nombre:'Mermelada de kiwi',
      precio:3.0,
      descripcion:'Para los que les gusta poner un poquito de acidez en sus desayunos y yogures.',
      fechconpref: 4,
      alergeno: 'Sin alergenos',
      imagen: 'assets/images/mermelada_kiwi.png'
    },
    {
      nombre:'Mermelada de naranja',
      precio:1.7,
      descripcion:'Perfecta para tomar con helados, yogures, quesos fuertes y como acompañamiento en platos de caza y desayunos.',
      fechconpref: 7,
      alergeno: 'Sin alergenos',
      imagen: 'assets/images/mermelada_naranja.png'
    },
    {
      nombre:'Mermelada de ciruela',
      precio:3.5,
      descripcion:'Su suave textura la hace ideal para desayunos y elaborar exquisitas salsas para carnes.',
      fechconpref: 5,
      alergeno: 'Sin alergenos',
      imagen: 'assets/images/mermelada_ciruela.png'
    },
    {
      nombre:'Mermelada de melocotón',
      precio:2.5,
      descripcion:'Sabores de la tierra en desayunos y meriendas y la elaboración de platos de caza. Sorprendente en una vinagreta para aderezar costillas de cerdo.',
      fechconpref: 4,
      alergeno: 'Sin alergenos',
      imagen: 'assets/images/mermelada_melocoton.png'
    },
    {
      nombre:'Mermelada de piña y coco',
      precio:5.5,
      descripcion:'Ideal para acompañar salmón ahumado, carnes blancas y queso fresco.',
      fechconpref: 6,
      alergeno: 'Sin alergenos',
      imagen: 'assets/images/mermelada_pcoco.png'
    }
  ];

  /*Devolver producto*/
  getProductos():Producto[]{
    return this.productos;
  }

  /*Devolver varios productos*/

  getProducto(index:number):Producto{
    return this.productos[index];
  }

  /*Generar y buscar productos*/
  productSearch(text:string):Producto[]{
    let productFound: Producto[] = [];
    text = text.toLowerCase();

    for (let i = 0; i < this.productos.length; i++) {
        let product = this.productos[i];
        let name = this.productos[i].nombre.toLowerCase();

        if(name.indexOf(text) >= 0){
          product.id = i;
          productFound.push(product);
        }
    }
    return productFound;
  }
}


