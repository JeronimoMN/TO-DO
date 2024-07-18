
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../shared/nav-bar/nav-bar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { FormArray, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, NavBarComponent, FooterComponent, ReactiveFormsModule, FormsModule],
  providers: [TodoService],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  tasks: string[]= [];
  newTask: string = '';
  selectedTask: number | null = null;
  isEditing: boolean = false;


  constructor(private todoService: TodoService){
    this.tasks = this.todoService.getTasks();
  }



  selectTask(index : number){
    this.selectedTask = index
  }

  saveTask(){
    if(this.newTask.trim()){
      this.todoService.addTask(this.newTask.trim());
      this.newTask = '';
    }
  }

  updateTask(){
    if (this.selectedTask !== null) {
      this.todoService.updateTask(this.selectedTask, this.newTask.trim());
      this.selectedTask = null;
      this.newTask= '';
    }
  }

  toggleTaskSelection(index: number, event: Event) {
    this.selectedTask = (event.target as HTMLInputElement).checked ? index : null;
    this.isEditing = false; // Reset editing mode when selection changes

  }

  deleteTask(){
    if(this.selectedTask !== null){
      this.todoService.deleteTask(this.selectedTask);
      this.selectedTask = null;
    }
  }


}


