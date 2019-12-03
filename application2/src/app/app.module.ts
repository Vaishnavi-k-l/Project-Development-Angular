import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { routing } from "./app-routing.module";
import { AppComponent } from './app.component';
import { LoginComponent } from './layout/login/login.component';
import { FormsModule }   from '@angular/forms';



import { ApiService } from "./services/apiservice.service";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { TokenInterceptor } from "./services/token-interceptor.service";
import { SuccessComponent } from './components/success/success.component';

import { ManagerComponent } from './components1/manager/manager.component';
import { ServiceService } from './services/service.service';
import { AgreedocComponent } from './components/agreedoc/agreedoc.component';

//admin
import { CompletedProjectComponent } from './components/completed-project/completed-project.component';
import { ChartService } from './services/chart.service';
import { MaterialModule } from './modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CardSmComponent } from './components/cards/card-sm/card-sm.component';
import { CardLayoutComponent } from './layout/card-layout/card-layout.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatBadgeModule } from '@angular/material/badge';
import { ChartsModule } from 'ng2-charts';
import { CardHrChartComponent } from './components/cards/card-hr-chart/card-hr-chart.component';
import { CardVrChartComponent } from './components/cards/card-vr-chart/card-vr-chart.component';
import { TaskComponent } from './components/task/task.component';
import { WorkforceComponent } from './layout/work-force/work-force.component';
import { SubtaskComponent } from './components/subtask/subtask.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProgressBarModule } from "angular-progress-bar";
import { OngoingProjectComponent } from './components/ongoing-project/ongoing-project.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { CompletedialogComponent } from './components1/completedialog/completedialog.component';
import { CompleteProjectComponent } from './components1/completeproject/completeproject.component';
import { CreateSubTaskComponent } from './components1/create-sub-task/create-sub-task.component';
import { CreateTaskComponent } from './components1/create-task/create-task.component';
import { CardSmMComponent } from './components1/cards/card-smM/card-smM.component';
import {CardHrChartMComponent} from './components1/cards/card-hr-chartM/card-hr-chartM.component';
import {CardVrChartMComponent} from './components1/cards/card-vr-chartM/card-vr-chartM.component';
import {SubtaskMComponent} from './components1/subtaskM/subtaskM.component';
import {TaskMComponent} from './components1/taskM/taskM.component';
import {WorkforceMComponent} from './layout/workforce-m/workforce-m.component';
import { ProjectMongoService } from './services/projectmongo.service';
import { SkillsService } from './services/skill.service';
import {EmployeeService} from './services/employee.service';
import {ProjectService} from './services/project.service';
import {ProjectMemberService} from './services/projectmember.service';
import {TaskDataStorageService} from './services/taskdatastorage.service';
import {CardLayoutMComponent } from './components1/card-layout-m/card-layout-m.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SuccessComponent,
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
  ],
  imports: [
    FormsModule,
    BrowserModule,
    routing,
    MaterialModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    RecaptchaModule,
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
    ProjectMongoService,
    SkillsService,
    TaskDataStorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
