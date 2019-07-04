import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SomaService {

  constructor() { }

  soma(n1, n2){
    return n1 + n2;
  }
}
