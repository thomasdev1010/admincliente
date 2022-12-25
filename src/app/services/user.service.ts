import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  listUsers: User[] = [
    {documento: 10000000, nombre: 'Juan', apellido: 'uno', correo: 'juan@h.com', celular: 320 , direccion: 'H'},
    {documento: 11111111, nombre: 'Pedro', apellido: 'dos', correo: 'pedro@j.com', celular: 3000 , direccion: 'uii'},
    {documento: 1222222, nombre: 'Maria', apellido: 'tres', correo: 'maria@k.com', celular: 3456 , direccion: 'lkjj'},
    {documento: 14455555, nombre: 'Jose', apellido: 'cuatro', correo: 'jose@hgg.com', celular: 36788 , direccion: 'jkkk'},
  ];

  constructor() { }

  getUser(){
    return this.listUsers.slice();
  }

  eleminarUser(index: number){
    this.listUsers.splice(index, 1);

  }

  agregarCliente(user: User){
    this.listUsers.unshift(user);
  }
}
