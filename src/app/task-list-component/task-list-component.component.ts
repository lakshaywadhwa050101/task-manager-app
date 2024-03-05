import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task.model';
import { NgForm } from '@angular/forms';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list-component',
  templateUrl: './task-list-component.component.html',
  styleUrl: './task-list-component.component.css'
})
export class TaskListComponent {
  tasks: Task[] = [];
  title: string;
  description: string;
  priority: string;
  dueDate: Date;
  localItem: string;
  taskService: TaskService;
  private router: Router
  searchText: string = '';
  constructor() {
    this.taskService = new TaskService();
    this.tasks=this.taskService.getTasks();
    this.filteredTasksList=this.tasks;
  }
  filteredTasksList:Task[]=this.tasks;

  ngOnInit(): void {
  }

  getfilteredTasks() {
    console.log('calling')
    this.filteredTasksList=this.tasks.filter(task => task.title.toLowerCase().includes(this.searchText.toLowerCase()));
  }

  getCategoryColor(priority: string): string {
    switch (priority) {
      case '1':
        return '#FF7373';
      case '2':
        return 'lightblue';
      case '3':
        return 'lightgreen';
    }
  }

  createNewTask() {
    this.router.navigate(['/create-new-task']);
  }

  deleteTask(task: Task) {
    this.tasks=this.taskService.deleteTask(task);
  }

  updateTask(task:Task){
    this.tasks=this.taskService.updateTask(task);
  }

}
