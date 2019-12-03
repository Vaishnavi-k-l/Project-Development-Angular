import { Employee } from './employee';


export class Subtaskmapper {
   
    subTaskTitle: string;
    subTaskDescription: string;
    startDate: Date;
    dueDate: Date;
    employeeId: Employee;

    constructor(subTaskTitle?: string,
        startDate?: Date,
        dueDate?: Date,
        employeeId?: Employee,
        subTaskDescription?: string)
        {

            this.subTaskTitle = subTaskTitle;
            this.startDate = startDate;
            this.dueDate = dueDate;
            this.employeeId = employeeId;
            this.subTaskDescription = subTaskDescription;
        }
}