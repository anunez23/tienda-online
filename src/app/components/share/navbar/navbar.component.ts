import { Component, OnInit } from '@angular/core';
import {style} from '@angular/animations';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  visualizaBusqueda(){

    if(document.getElementById("busq")!.style.display === 'block')
      document.getElementById("busq")!.style.display = 'none';
    else
      document.getElementById("busq")!.style.display = 'block';
  }
  searchProduct(text:string){
    this.router.navigate(["/search",text]);
  }
}
