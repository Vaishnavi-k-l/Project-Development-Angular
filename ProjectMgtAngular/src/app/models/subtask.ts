
import { Employee } from './employee';

export class Subtask {
    subTaskId: number;
    taskId: number;
    employeeId: Employee;
    subTaskTitle: string;
    comment: string;
    subTaskDescription: string;
    startDate: Date;
    dueDate: Date;
    progressPercentage: number;

    constructor(subTaskId?: number,
        subTaskTitle?: string,
        subTaskDescription?: string,

        startDate?: Date,  
        dueDate?: Date,
        progressPercentage?: number,
        comment?: string,
        employeeId?: Employee,
        taskId?: number,
          ){
             
            this.subTaskId = subTaskId;
            this.taskId = taskId;
            this.employeeId = employeeId;
            this.subTaskTitle = subTaskTitle;
            this.comment = comment;
            this.subTaskDescription = subTaskDescription;
            this.startDate = startDate;
            this.dueDate = dueDate;
            this.progressPercentage = progressPercentage;

    }
}

