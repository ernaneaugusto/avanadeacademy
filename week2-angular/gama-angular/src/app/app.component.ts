import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo/todo.service';
import { map, debounceTime } from 'rxjs/operators';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title = 'Ernane Toledo';
  items = ["ernane", "toledo"];
  email = '';

  contador = 0;

  constructor(public todoService: TodoService, private authService: AuthService) { }

  ngOnInit() {
    this.todoService.contador
      .pipe(
        map(x => x * 2),
        debounceTime(1000)
      )
      .subscribe(value => {
        this.contador = value;
      });

    const token = localStorage.getItem("token");
    if (token) {
      this.authService.verifyToken(token)
        .subscribe((value: any) => {
          this.authService.setUser(value);
          this.email = value.users[0].email;
        })
    }
  }


  zerarLista() {
    this.items = [];
  }

  novoItem() {
    const text = prompt("Digite um nome: ");

    if (text !== "") {
      this.items.push(text);
    } else {
      alert("Campo não pode ser vazio!");
      return;
    }
  }

  logout(){
    console.log("sair")
    localStorage.removeItem("token");
    this.authService.setUser(null);
  }
}
