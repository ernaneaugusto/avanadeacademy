import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { map, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title = 'Ernane Toledo';
  items = ["ernane", "toledo"];

  contador = 0;

  constructor(public todoService: TodoService){}

  ngOnInit(){
    this.todoService.contador
      .pipe(
        map(x => x * 2),
        debounceTime(1000)
      )
      .subscribe(value => {
        this.contador = value;
      })
  }


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
