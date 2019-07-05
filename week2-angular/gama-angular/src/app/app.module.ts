import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { ContadorComponent } from './contador/contador.component';
import { ContadorBotoesComponent } from './contador-botoes/contador-botoes.component';
import { ListaTodosComponent } from './todo/lista-todos/lista-todos.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { FormsModule } from '@angular/forms'
import { HomeComponent } from './home/home.component';
import { CepComponent } from './cep/cep/cep.component';
// import { CepTextoComponent } from './cep/cep-texto/cep-texto.component';
import { AddTodoComponent } from './todo/add-todo/add-todo.component';
import { BoolPipe } from './todo/bool.pipe';
// import { TodoModule } from './todo/todo.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'todos', component: ListaTodosComponent },
  { path: 'todos', loadChildren: () => import('./todo/todo.module').then(mod => mod.TodoModule) },
  { path: 'cep', loadChildren: () => import('./cep/cep.module').then(mod => mod.CepModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule) }
  // { path: 'todos/add', component: AddTodoComponent },
  // { path: 'cep/:numero', component: CepComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    ContadorComponent,
    ContadorBotoesComponent,
    ListaTodosComponent,
    HomeComponent,
    // CepComponent,
    // CepTextoComponent,
    AddTodoComponent,
    BoolPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
    // ,TodoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
