import { Component, OnInit } from '@angular/core';
import {style} from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  visualizaBusqueda(){

    if(document.getElementById("busq")!.style.display === 'block')
      document.getElementById("busq")!.style.display = 'none';
    else
      document.getElementById("busq")!.style.display = 'block';
  }
}
