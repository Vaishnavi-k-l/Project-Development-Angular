

import { Project } from './project';

export class Task {
    taskId: number ;
    projectId: Project;
    taskTitle: string;
    description: string;
    startDate: Date;
    dueDate: Date;
    subTaskCount: number;
    progress: number ;


    constructor(taskId?: number,projectId?: Project,taskTitle?: string,startDate?: Date,description?: string,
        dueDate?: Date,  subTaskCount?: number, progress?: number){

            this.taskId = taskId;
            this.projectId= projectId;
            this.taskTitle = taskTitle;
            this.startDate = startDate;
            this.description = description;
            this.dueDate = dueDate;
            this.subTaskCount = subTaskCount;
            this.progress = progress;

    }
}
