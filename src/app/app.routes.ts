import { Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { FormTaskComponent } from './shared/form-task/form-task.component';

export const routes: Routes = [
    {path: 'to-do', component: TodoComponent},
    {path: 'testing', component: FormTaskComponent},
    {path: '', redirectTo: 'to-do', pathMatch: 'full'},
    {path: '**', redirectTo: 'to-do', pathMatch: 'full'}
];
