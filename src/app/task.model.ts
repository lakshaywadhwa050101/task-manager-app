export class Task{
    public title:string;
    public description: string;
    public priority: string; //1-High, 2-Medium, 3-Low
    public dueDate: Date

    constructor(title:string, description:string, priority:string, dueDate:Date){
        this.title=title;
        this.description=description;
        this.priority=priority;
        this.dueDate=dueDate;
    }
}