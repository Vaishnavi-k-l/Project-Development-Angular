import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./layout/login/login.component";

import { ManagerComponent } from './components/manager/manager.component';
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
import { TaskMComponent } from './components/taskM/taskM.component';
import { SubtaskMComponent } from './components/subtaskM/subtaskM.component';
import { WorkforceMComponent } from './layout/workforce-m/workforce-m.component';
import { CardLayoutMComponent } from './components/card-layout-m/card-layout-m.component';
import {EmployeeUpdtaeComponent} from './components/employee-updtae/employee-updtae.component';
import {ErrorpageComponent} from './components/errorpage/errorpage.component';
import {RolebasedauthService} from './services/rolebasedauth.service';

const routes: Routes = [ 
    {
        path: '', component: LoginComponent
    },


    { path: 'errorpage', component: ErrorpageComponent },
    {
        path: 'employee', component: EmployeeUpdtaeComponent, data: {
            expectedRole: 'MEMBER'
        }
    },
    {
        path: 'login', component: LoginComponent,
    },
   
    { path: 'agreedoc', component: AgreedocComponent, canActivate: [RolebasedauthService] },

    {
        path: 'manager', component: ManagerComponent, canActivate: [RolebasedauthService],
  data: {
                    expectedRole: 'MANAGER'
                },
        children: [
            {
                path: '',
                component: CardLayoutMComponent,
                canActivate: [RolebasedauthService],
                data: {
                    expectedRole: 'MANAGER'
                }
            },
            {
                path: 'card',
                component: CardLayoutMComponent,
                canActivate: [RolebasedauthService],
                data: {
                    expectedRole: 'MANAGER'
                }
            },
            {
                path: 'taskM',
                component: TaskMComponent,
                canActivate: [RolebasedauthService],
                data: {
                    expectedRole: 'MANAGER'
                }
            },
            {
                path: 'subtaskM',
                component: SubtaskMComponent,
                canActivate: [RolebasedauthService],
                data: {
                    expectedRole: 'MANAGER'
                }
            }
        ]
    },
    // { path: 'workforce', component: WorkforceComponent },
    // { path: 'task', component: TaskComponent },
    // { path: 'subtask', component: SubtaskComponent },
    //   {path: 'side-nav/completed', component: CompletedProjectComponent},
{
        path: 'side-nav', component: SidenavComponent, canActivate: [RolebasedauthService],
         data: {
                expectedRole: 'ADMIN'
            },
        children: [{
            path: 'completed',
            component: CompletedProjectComponent,
            canActivate: [RolebasedauthService],
            data: {
                expectedRole: 'ADMIN'
            }
        },
        {
            path: '',
            component: CardLayoutComponent,
            canActivate: [RolebasedauthService],
            data: {
                expectedRole: 'ADMIN'
            }

        },
        {
            path: 'project',
            component: CardLayoutComponent,
            canActivate: [RolebasedauthService],
            data: {
                expectedRole: 'ADMIN'
            }

        },
        {
            path: 'workforce',
            component: WorkforceComponent,
            canActivate: [RolebasedauthService],
            data: {
                expectedRole: 'ADMIN'
            }
        },
        {
            path: 'task',
            component: TaskComponent,
            canActivate: [RolebasedauthService],
            data: {
                expectedRole: 'ADMIN'
            }
        },
        {
            path: 'subtask',
            component: SubtaskComponent,
            canActivate: [RolebasedauthService],
            data: {
                expectedRole: 'ADMIN'
            }
        },

        {
            path: 'ongoing',
            component: OngoingProjectComponent,
            canActivate: [RolebasedauthService],
            data: {
                expectedRole: 'ADMIN'
            }
        },
        {
            path: 'details',
            component: ProjectDetailsComponent,
            canActivate: [RolebasedauthService],
            data: {
                expectedRole: 'ADMIN'
            }
        },
        {
            path: 'createproject',
            component: CreateProjectComponent,
            canActivate: [RolebasedauthService],
            data: {
                expectedRole: 'ADMIN'
            }
        }
        ]
    }

];



export const routing = RouterModule.forRoot(routes);