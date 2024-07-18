import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { FormServiceService } from './form-service.service';


@Component({
  selector: 'app-form-task',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatDialogModule, FormsModule],
  providers: [FormServiceService],
  templateUrl: './form-task.component.html',
  styleUrl: './form-task.component.css'
})
export class FormTaskComponent{
  tareas: string[] = [];
  nuevaTarea: string = '';
  tareaSeleccionada: number | null = null;

  constructor(private tareaService: FormServiceService) {
    this.tareas = this.tareaService.getTareas();
  }

  guardarTarea() {
    if (this.nuevaTarea.trim()) {
      this.tareaService.addTarea(this.nuevaTarea.trim());
      this.nuevaTarea = '';
    }
  }

  seleccionarTarea(index: number) {
    this.tareaSeleccionada = index;
  }

  editarTarea() {
    if (this.tareaSeleccionada !== null && this.nuevaTarea.trim()) {
      this.tareaService.updateTarea(this.tareaSeleccionada, this.nuevaTarea.trim());
      this.tareaSeleccionada = null;
      this.nuevaTarea = '';
    }
  }

  eliminarTarea() {
    if (this.tareaSeleccionada !== null) {
      this.tareaService.deleteTarea(this.tareaSeleccionada);
      this.tareaSeleccionada = null;
    }
  }
}
