import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/typings/Todo';
import { TodoService } from '../todo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  isEdit = false;
  todo: Todo = {
    id: null,
    title: '',
    description: '',
    finished: false,
    date: '',
    userId: ''
  };

  constructor(
    private todoService: TodoService,
    private router: Router,
    private autService: AuthService,
    private activatedRoute: ActivatedRoute
  ) { }

  enviarTodo() {
    console.log("Enviar /o/")
    if(this.isEdit){
      this.todoService.updateTodo(this.todo.id, this.todo).subscribe(value => {
        alert("To-do atualizado com sucesso!");
        this.router.navigateByUrl('/todos');
      });
    } else {
      this.todoService.adicionarTodo(this.todo).subscribe(value => {
        alert("To-do adicionado com sucesso!");
        this.router.navigateByUrl('/todos');
      });
    }
  }

  ngOnInit() {

    this.activatedRoute.params
      .subscribe(paramsUrl => {
        if (paramsUrl.id) {
          this.isEdit = true;

          this.todoService.getTodo(paramsUrl.id).subscribe((todo: Todo) => {
            this.todo = todo;
          })
        }

      })

    this.autService.currentUser
      .subscribe(user => {
        this.todo.userId = user.id
      })
  }
}
