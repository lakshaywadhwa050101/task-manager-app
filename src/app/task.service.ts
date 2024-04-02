import { NgForm } from "@angular/forms";
import { Task } from "./task.model";
import { get } from "http";

export class TaskService {
    tasks: Task[] = [];
    localItem: string;

    constructor() {
        if (typeof localStorage !== 'undefined') {
            this.localItem = localStorage.getItem("tasks")
            if (this.localItem == null) this.tasks = [];
            else this.tasks = JSON.parse(this.localItem)
        }
    }
    addTask(task: Task):Task[] {
        this.tasks.push(task)
        localStorage.setItem("tasks", JSON.stringify(this.tasks))
        this.sortTasks();
        return this.tasks;
    }

    deleteTask(task: Task):Task[] {
        const index = this.tasks.indexOf(task)
        this.tasks.splice(index, 1)
        localStorage.setItem("tasks", JSON.stringify(this.tasks))
        this.sortTasks();
        return this.tasks;
    }

    updateTask(task: Task):Task[] {
        const index = this.tasks.indexOf(task)
        this.tasks[index] = task;
        localStorage.setItem("tasks", JSON.stringify(this.tasks))
        this.sortTasks();
        return this.tasks;
    }

    getTasks(): Task[] {
        if (typeof localStorage !== 'undefined') {
            this.localItem = localStorage.getItem("tasks")
            if (this.localItem == null) {
                this.tasks = [];
            }
            else {
                this.tasks = JSON.parse(this.localItem)
            }
        }
        this.sortTasks();
        return this.tasks;
    }

    sortTasks(): Task[] {
        return this.tasks.sort((a, b) => {
            const dateA = new Date(a.dueDate).getTime();
            const dateB = new Date(b.dueDate).getTime();
            return dateA - dateB;
        });
    }
    
    getTask(taskId:string):Task{
        this.tasks=this.getTasks();
        return this.tasks.find(task => task.title === taskId);
    }
}