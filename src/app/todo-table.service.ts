import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TodoTableService {

  constructor() { }
  toDoList: Task[] = [
    { dateAdded: '01/01/2001', timeAdded: "20:39", taskText: "Do not forget to feed the cat" },
    { dateAdded: '01/01/2002', timeAdded: "23:12", taskText: "Do not forget to feed the dog" },
    { dateAdded: '01/01/2003', timeAdded: "09:21", taskText: "Do not forget to feed the lizard" },

  ];
}
