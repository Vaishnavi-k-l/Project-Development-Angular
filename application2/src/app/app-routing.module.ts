import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./layout/login/login.component";
import { SuccessComponent } from './components/success/success.component';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { ManagerComponent } from './components1/manager/manager.component';
import { AgreedocComponent } from './components/agreedoc/agreedoc.component';
import { CardLayoutComponent } from './layout/card-layout/card-layout.component';
import { WorkforceComponent } from './layout/work-force/work-force.component';
import { TaskComponent } from './components/task/task.component';
import { SubtaskComponent } from './components/subtask/subtask.component';
import { CompletedProjectComponent } from './components/completed-project/completed-project.component';
import { OngoingProjectComponent } from './components/ongoing-project/ongoing-project.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { TaskMComponent } from './components1/taskM/taskM.component';
import { SubtaskMComponent } from './components1/subtaskM/subtaskM.component';
import { WorkforceMComponent } from './layout/workforce-m/workforce-m.component';
import { CardLayoutMComponent } from './components1/card-layout-m/card-layout-m.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'success', component: SuccessComponent, canActivate: [AuthGaurdService] },
    { path: 'login', component: LoginComponent },
    { path: 'manager', component: ManagerComponent, canActivate: [AuthGaurdService] },
    { path: 'agreedoc', component: AgreedocComponent, canActivate: [AuthGaurdService] },

    {
        path: 'manager', component: ManagerComponent, canActivate: [AuthGaurdService],
        children: [
            {
                path: '',
                component: CardLayoutMComponent,
                canActivate: [AuthGaurdService]
            },
            {
                path: 'card',
                component: CardLayoutMComponent,
                canActivate: [AuthGaurdService]
            },
            {
                path: 'taskM',
                component: TaskMComponent,
                canActivate: [AuthGaurdService]
            },
            {
                path: 'subtaskM',
                component: SubtaskMComponent,
                canActivate: [AuthGaurdService]
            }
        ]
    },
    // { path: 'workforce', component: WorkforceComponent },
    // { path: 'task', component: TaskComponent },
    // { path: 'subtask', component: SubtaskComponent },
    //   {path: 'side-nav/completed', component: CompletedProjectComponent},

    {
        path: 'side-nav', component: SidenavComponent, canActivate: [AuthGaurdService],
        children: [{
            path: 'completed',
            component: CompletedProjectComponent,
            canActivate: [AuthGaurdService]
        },
        {
            path: '',
            component: CardLayoutComponent,
            canActivate: [AuthGaurdService]
        },
        {
            path: 'project',
            component: CardLayoutComponent,
            canActivate: [AuthGaurdService]

        },
        {
            path: 'workforce',
            component: WorkforceComponent,
            canActivate: [AuthGaurdService]
        },
        {
            path: 'task',
            component: TaskComponent,
            canActivate: [AuthGaurdService]
        },
        {
            path: 'subtask',
            component: SubtaskComponent,
            canActivate: [AuthGaurdService]
        },

        {
            path: 'ongoing',
            component: OngoingProjectComponent,
            canActivate: [AuthGaurdService]
        },
        {
            path: 'details',
            component: ProjectDetailsComponent,
            canActivate: [AuthGaurdService]
        },
        {
            path: 'createproject',
            component: CreateProjectComponent,
            canActivate: [AuthGaurdService]
        }
        ]
    }

];



export const routing = RouterModule.forRoot(routes);