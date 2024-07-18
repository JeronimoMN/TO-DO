import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  constructor() { }

  private tareas: string[] = [];

  getTareas() {
    return this.tareas;
  }

  addTarea(tarea: string) {
    this.tareas.push(tarea);
  }

  updateTarea(index: number, nuevaTarea: string) {
    if (index >= 0 && index < this.tareas.length) {
      this.tareas[index] = nuevaTarea;
    }
  }

  deleteTarea(index: number) {
    if (index >= 0 && index < this.tareas.length) {
      this.tareas.splice(index, 1);
    }
  }

}
