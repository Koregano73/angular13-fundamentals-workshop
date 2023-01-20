import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { FormsModule } from '@angular/forms';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { LessonsComponent } from './lessons/lessons/lessons.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
  ],
  declarations: [AppComponent, HomeComponent, CoursesComponent, CourseDetailsComponent, CoursesListComponent, LessonsComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
