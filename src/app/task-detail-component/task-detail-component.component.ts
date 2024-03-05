import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-detail-component',
  templateUrl: './task-detail-component.component.html',
  styleUrl: './task-detail-component.component.css'
})
export class TaskDetailComponent {
  taskId: string;
  taskService:TaskService=null;
  constructor(private route: ActivatedRoute) { }
  task:Task

  title: string;
  description: string;
  priority: string;
  dueDate: Date;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.taskId = params['id'];
      this.taskService=new TaskService();
      console.log('task-detail ngOnInit() '+this.taskId)
      this.task=this.getTask(this.taskId)
      console.log('task-detail ngOnInit '+typeof(this.task))
      console.log('task-detail ngOnInit '+JSON.stringify(this.task))
    });
  }

  getTask(taskId:string):Task{
    console.log('task-detail getTask() '+this.taskId)
    return this.taskService.getTask(taskId);
  }

  editing: boolean = false; 

  updateTask(task:Task): void {
    this.editing = !this.editing;
    console.log(task)
    this.taskService.updateTask(task)
  }
}
