import { Project } from './project';
import { Employee } from './employee';

export class Projectmember {
    projectId: Project;
    employeeId: Employee;
    authority: boolean;

    constructor(projectId?: Project, employeeId?: Employee, authority?: boolean){
        this.projectId = projectId;
        this.employeeId = employeeId;
        this.authority = authority;
    }
}