import { Component } from '@angular/core';
import { Task } from '../task';
import { TodoTableService } from '../todo-table.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  editedIndex: number[] = [];
  edited: number[] = [];
  toDoList: Task[] = [];

  edit(index: number): number[] {
    if (!this.editedIndex.includes(index)) {
      this.editedIndex.push(index);
    }
    if (this.edited.includes(index)) {
      this.edited.splice(this.edited.indexOf(index), 1);
    }
    return this.editedIndex;
  }
  delete(index: number): void {
    this.toDoList.splice(index, 1);
    if (this.edited.includes(index)) {
      this.edited.splice(this.edited.indexOf(index), 1);
    }
    if (this.editedIndex.includes(index)) {
      this.editedIndex.splice(this.editedIndex.indexOf(index));
    }

  }
  done(index: number): void {
    this.edited.push(index);
    this.editedIndex.splice(index, 1);
  }
  constructor(private _TodoTableService: TodoTableService) {

  }
  ngOnInit(): void {

    this.toDoList = this._TodoTableService.toDoList;
  }
}
