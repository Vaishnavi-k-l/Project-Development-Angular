import { Employee } from './employee';


export class Project {

    projectId: number;
    name: string;
    startDate  : string;
    endDate : string;
    managerId : Employee;
    budget : number;
    isCompleted: boolean;
    githubLink: string;

    constructor(projectId?: number,
        name?: string,
        startDate?  : string,
        endDate?: string,
        managerId? : Employee,
        budget? : number,
        isCompleted?: boolean,
        githubLink?: string
    ){

        this.projectId = projectId;
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.managerId = managerId;
        this.budget = budget;
        this.isCompleted = isCompleted;
        this.githubLink = githubLink;
    }

}