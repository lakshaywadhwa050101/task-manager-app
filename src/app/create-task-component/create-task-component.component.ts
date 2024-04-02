import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-task-component',
  templateUrl: './create-task-component.component.html',
  styleUrl: './create-task-component.component.css'
})
export class CreateTaskComponentComponent {
  tasks: Task[] = [];
  title: string;
  description: string;
  priority: string;
  dueDate: Date;
  localItem: string;
  taskService: TaskService;
  private router:Router;

  constructor() {
    this.taskService = new TaskService();
    this.tasks=this.taskService.getTasks();
  }

  ngOnInit(): void {
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

  createTask(form: NgForm) {
    this.taskService.addTask(new Task(this.title, this.description, this.priority, this.dueDate));
    window.location.href = '/';
  }

  deleteTask(task: Task) {
    this.tasks=this.taskService.deleteTask(task);
  }

  updateTask(task:Task){
    this.tasks=this.taskService.updateTask(task);
  }

}
