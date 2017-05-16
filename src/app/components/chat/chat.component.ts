import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  mensaje:string="";
  elemento:any;

  constructor( public _cs:ChatService) {
    this._cs.cargarMensajes()
      .subscribe( ()=>{
        console.log("Mensajes Cargados..")
        setTimeout(()=>this.elemento.scrollTop = this.elemento.scrollHeight, 30);
      })
   }

  ngOnInit() {
    this.elemento= document.getElementById("app-mensajes");
  }

  enviar(){
    if (this.mensaje.length == 0){
      return;
    }

    this._cs.agregarMensaje(this.mensaje)
      .then( ()=>console.log("Hecho!"))
      .catch((error)=> console.error(error))
    this.mensaje="";
  }

}
