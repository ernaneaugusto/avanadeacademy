import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title = 'Ernane Toledo';
  items = ["ernane", "toledo"];

  ngOnInit(){

  } // OnInit


  zerarLista(){
    this.items = [];
  }

  
  novoItem(){
    const text = prompt("Digite um nome: ");

    if (text !== "") {
      this.items.push(text);
    } else{
      alert("Campo não pode ser vazio!");
      return;
    }
  }
}
