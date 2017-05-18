import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Mensaje } from '../interfaces/mensaje.interface';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class ChatService {

  chats: FirebaseListObservable<any[]>;
  chats1: FirebaseListObservable<any[]>;
  usuario:any={};
  admin:boolean=true;
    constructor(private db: AngularFireDatabase, public afAuth:AngularFireAuth) {
      //this.chats = db.list('/chats');

      if (localStorage.getItem('usuario')){
        this.usuario = JSON.parse(localStorage.getItem('usuario'));
      }else{
        this.usuario = null;
      }
    }

    cargarMensajes(){
      this.chats = this.db.list('/chats/'+this.usuario.user.uid, {
        query:{
          limitToLast:20,
          orderByKey:true
        }
      })
      return this.chats;
    }

    cargarUsuarios(){
      this.chats1 = this.db.list('/chats', {
        query:{
          limitToLast:20,
          orderByKey:true
        }
      })
    return this.chats1;
    }

    seleccionarUsuario(userK:string){
      var usuarioSeleccionado= userK;
      console.log(userK);
        this.chats = this.db.list('/chats/'+userK,{
          query:{
            limitToLast:20,
            orderByKey:true
          }
        })
        return this.chats;
    }


    agregarMensaje(texto:string){

      let mensaje:any={
        nombre:this.usuario.user.displayName,
        mensaje: texto,
        uid:this.usuario.user.uid,
        photoUrl: this.usuario.user.photoURL
      }
      if(this.admin==false){
        this.chats.update('/',{
          nombre:this.usuario.user.displayName
        });
      }
      return this.chats.push(mensaje);
  }

    login( proveedor:string) {
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider(),)
    .then( data =>{
        console.log(data);
        this.usuario =data;
        localStorage.setItem('usuario', JSON.stringify(data));
        console.log(this.afAuth)
        if(this.usuario.user.uid=="9FzQOp5XfeXmrG3VwDuap3xHYT82"){
            this.admin=true;
            console.log(this.admin);
        }else{
          this.admin=false;
        }
      });

    }

    logout() {
      localStorage.removeItem('usuario');
      this.usuario = null;
      this.afAuth.auth.signOut();
    }
}
