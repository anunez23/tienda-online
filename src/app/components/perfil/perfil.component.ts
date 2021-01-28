import { Component, OnInit } from '@angular/core';
import {$} from "protractor";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  nombre:string = 'Juan Antonio Perez';
  constructor() { }

  ngOnInit(): void {
  }

}
