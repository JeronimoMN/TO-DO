import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private tasks: string[] = [];

  constructor() { }

  getTasks(){
    return this.tasks;
  }

  addTask(task: string ){
    this.tasks.push(task);
  }

  updateTask(index: number, task: string){
    if(index >= 0 && index < this.tasks.length){
      this.tasks[index] = task;
    }
  }

  deleteTask(index: number){
    if(index >= 0 && index < this.tasks.length){
      this.tasks.splice(index, 1);
    }
  }
}
