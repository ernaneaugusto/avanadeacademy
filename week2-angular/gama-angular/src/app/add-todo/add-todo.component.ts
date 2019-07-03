import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/typings/Todo';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  todo: Todo = {
    id: null,
    title: '',
    description: '',
    finished: false,
    date: '',
  };

  constructor(private todoService: TodoService, private router: Router) { }

  enviarTodo(){
    console.log("Enviar /o/")
    this.todoService.adicionarTodo(this.todo).subscribe(value => {
      alert("To-do adicionado com sucesso!");
      this.router.navigateByUrl('/todos');
    });
  }

  ngOnInit() {
  }

}
