import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TaskListComponent } from './task-list-component/task-list-component.component';
import { TaskDetailComponent } from './task-detail-component/task-detail-component.component';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CreateTaskComponentComponent } from './create-task-component/create-task-component.component';
import { RouterModule } from '@angular/router';
import { DataVisualComponent } from './data-visual/data-visual.component';
import { ChartModule, LineSeriesService, CategoryService } from '@syncfusion/ej2-angular-charts';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskListComponent,
    TaskDetailComponent,
    CreateTaskComponentComponent,
    DataVisualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    RouterModule,
    ChartModule
  ],
  providers: [
    LineSeriesService,
    CategoryService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
