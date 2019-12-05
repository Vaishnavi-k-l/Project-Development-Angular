import { BrowserModule } from '@angular/platform-browser';
import { NgModule , ErrorHandler} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { routing } from "./app-routing.module";
import { AppComponent } from './app.component';
import { LoginComponent } from './layout/login/login.component';
import { FormsModule }   from '@angular/forms';



import { ApiService } from "./services/apiservice.service";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { TokenInterceptor } from "./services/token-interceptor.service";


import { ManagerComponent } from './layout/manager/manager.component';
import { ServiceService } from './services/service.service';
import { AgreedocComponent } from './components/agreedoc/agreedoc.component';

//admin
import { CompletedProjectComponent } from './components/completed-project/completed-project.component';
import { ChartService } from './services/chart.service';
import { MaterialModule } from './modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { CardSmComponent } from './components/cards/card-sm/card-sm.component';
import { CardLayoutComponent } from './layout/card-layout/card-layout.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatBadgeModule } from '@angular/material/badge';
import { ChartsModule } from 'ng2-charts';
import { CardHrChartComponent } from './components/cards/card-hr-chart/card-hr-chart.component';
import { CardVrChartComponent } from './components/cards/card-vr-chart/card-vr-chart.component';
import { TaskComponent } from './components/task/task.component';
import { WorkforceComponent } from './components/work-force/work-force.component';
import { SubtaskComponent } from './components/subtask/subtask.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProgressBarModule } from "angular-progress-bar";
import { OngoingProjectComponent } from './components/ongoing-project/ongoing-project.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { CompletedialogComponent } from './components/completedialog/completedialog.component';
import { CompleteProjectComponent } from './components/completeproject/completeproject.component';
import { CreateSubTaskComponent } from './components/create-sub-task/create-sub-task.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { CardSmMComponent } from './components/cards/card-sm-m/card-sm-m.component';
import {CardHrChartMComponent} from './components/cards/card-hr-chart-m/card-hr-chart-m.component';
import {CardVrChartMComponent} from './components/cards/card-vr-chart-m/card-vr-chart-m.component';
import {SubtaskMComponent} from './components/subtaskM/subtaskM.component';
import {TaskMComponent} from './components/taskM/taskM.component';
import {WorkforceMComponent} from './components/workforce-m/workforce-m.component';

import { SkillsService } from './services/skill.service';
import {EmployeeService} from './services/employee.service';
import {ProjectService} from './services/project.service';
import {ProjectMemberService} from './services/projectmember.service';
import {TaskDataStorageService} from './services/taskdatastorage.service';
import {CardLayoutMComponent } from './components/card-layout-m/card-layout-m.component';
import {SubtaskServiceService} from './services/subtask-service.service';
import {EmployeeUpdtaeComponent} from './components/employee-updtae/employee-updtae.component';
import { AddmembersComponent } from './components/addmembers/addmembers.component';
import { ViewmembersComponent } from './components/viewmembers/viewmembers.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';


import {ErrorService} from './services/error.service';
import { CardEmpLayoutComponent } from './layout/card-emp-layout/card-emp-layout.component';
import { CardVrEComponent } from './components/cards/card-vr-e/card-vr-e.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ManagerComponent,
    AgreedocComponent,
    CardLayoutComponent,
    WorkforceComponent,
    TaskComponent,
    SubtaskComponent,
    CompletedProjectComponent,
    OngoingProjectComponent,
    ProjectDetailsComponent,
    CardHrChartComponent,
    CardSmComponent,
    CardVrChartComponent,
    SidenavComponent,
    CreateProjectComponent,
    CompletedialogComponent,
    CompleteProjectComponent,
    CreateSubTaskComponent,
    CreateTaskComponent,
    CardHrChartMComponent,
    CardSmMComponent,
    CardVrChartMComponent,
    CompletedialogComponent,
    CreateProjectComponent,
    CreateSubTaskComponent,
    CreateTaskComponent,
    SubtaskMComponent,
    TaskMComponent,
    WorkforceMComponent,
    CardLayoutMComponent,
    EmployeeUpdtaeComponent,
    AddmembersComponent,
    ViewmembersComponent,
    ErrorpageComponent,
    CardEmpLayoutComponent,
    CardVrEComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    routing,
    MaterialModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    ChartsModule,
    HttpClientModule,
    MatGridListModule,
    ProgressBarModule,
    MatBadgeModule,
    BrowserAnimationsModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      outerStrokeColor: "#78C000",
      animationDuration: 300,
      showInnerStroke: false,
      showSubtitle: false,
      maxPercent: 100,
      unitsFontSize: "50",
      titleFontSize: "50",
      responsive: true
    })
  ],
  providers: [ApiService,
    ServiceService, ChartService,
    EmployeeService,
    ProjectService,
    ProjectMemberService,

    SkillsService,
    SubtaskServiceService,
    TaskDataStorageService,
   
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
     {
      provide: ErrorHandler,
      useClass:ErrorService
    }],
  bootstrap: [AppComponent],
  entryComponents: [CompletedialogComponent,CreateTaskComponent,CreateSubTaskComponent]
})
export class AppModule { }
