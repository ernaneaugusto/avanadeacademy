import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  contador = 0

  aumentar(){
    this.contador++;
  }
  diminuir(){
    this.contador--;
  }

  constructor() { }
}