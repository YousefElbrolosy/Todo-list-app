import { Component } from '@angular/core';
import { Task } from '../task';
import { TodoTableService } from '../todo-table.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  newTask: Task = { dateAdded: '', timeAdded: '', taskText: '' }
  toDoList: Task[] = [];
  show:boolean = false;
  error:boolean = false;
  constructor(private _TodoTableService: TodoTableService) {

  }
  ngOnInit(): void {
    this.toDoList = this._TodoTableService.toDoList;


  }
  submit() {
    if ((this.newTask.dateAdded == '' || this.newTask.timeAdded == '' || this.newTask.taskText == '')) {
      this.error=true;
    }
    else{
      this.error=false;
      this.toDoList.push(this.newTask);
    }

    
  }
}
