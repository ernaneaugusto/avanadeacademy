import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { ListaTodosComponent } from './lista-todos/lista-todos.component';
import { AddTodoComponent } from './add-todo/add-todo.component';

const routes: Routes = [
  { path: '', component: ListaTodosComponent },
  { path: 'add', component: AddTodoComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class TodoModule { }
