import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SomaService {

  constructor(private httpClient: HttpClient) { }

  soma(n1, n2){
    return n1 + n2;
  }
  getToDos(){
    return this.httpClient.get("http://localhost:3000");
  }
}
