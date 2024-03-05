import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskDetailComponent } from './task-detail-component/task-detail-component.component';
import { TaskListComponent } from './task-list-component/task-list-component.component';
import { CreateTaskComponentComponent } from './create-task-component/create-task-component.component';

const routes: Routes = [
  { path: '', component: TaskListComponent },
  { path: 'detail/:id', component: TaskDetailComponent },
  { path: 'create-new-task', component: CreateTaskComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
