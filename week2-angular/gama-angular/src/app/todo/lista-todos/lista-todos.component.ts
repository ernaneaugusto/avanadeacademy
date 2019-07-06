import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from 'src/typings/Todo';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-lista-todos',
  templateUrl: './lista-todos.component.html',
  styleUrls: ['./lista-todos.component.scss']
})
export class ListaTodosComponent implements OnInit {
  // todos = [];
  // todos$: Observable<Todo[]>;
  todos: Todo[] = [];

  constructor(private todoService: TodoService, private authService: AuthService) { }

  onDeleteItem(id) {
    this.todoService.deleteTodo(id).subscribe(value => {
      alert("To-do apagado com sucesso!");

      this.todos = this.todos.filter(todo => {
        todo.id != id;
      });

    });
  }

  ngOnInit() {
    // this.authService.currentUser.subscribe(user => {
    //   this.todos$ = this.todoService.getTodos(user.id)
    // });
    this.authService.currentUser.subscribe(user => {
      this.todoService.getTodos(user.id).subscribe((todos) => {
        this.todos = todos;
      });
    });

  }
}
