import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../services/chat.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  userKey:string="";

  constructor(public _cs:ChatService) {
    this._cs.cargarUsuarios()
      .subscribe( ()=>{
        console.log("Usuarios Cargados..");
      })
  }

  ngOnInit() {
  }

  seleccionar(userKey:string){
    console.log("la key es:"+userKey);
    this._cs.seleccionarUsuario(userKey);
  }

  }
