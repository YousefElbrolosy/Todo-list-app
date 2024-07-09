import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path: 'todolist', component: TodoListComponent, title: 'To Do List', children: [
      {path: 'addtask', component: AddTodoComponent }
    ]
  },
  { path: '', redirectTo: 'todolist', pathMatch: 'full' },
  {
    path:'**', component: ErrorComponent, title:'Error 404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
