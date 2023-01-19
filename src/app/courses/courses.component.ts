import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';

import { Course } from '../common/models/course';
import { CoursesService } from '../common/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  // 1. render courses in a list
  // 2. select a course
  // 3. render a selected course
  courses: any= [];
  
  selectedCourse: Course;
  originalTitle = '';

  ngOnInit(): void {
    this.fetchCourses();
    this.reset();
  }

  selectCourse(course) {
    // detach selected course from course by deep copying it so dont mutate other states
    this.selectedCourse = {...course};
    this.originalTitle = course.title;
  }

  deleteCourse(courseId: number) {
    this.coursesService.deleteCourse(courseId)
      .subscribe(result => this.fetchCourses())
  }


  fetchCourses() {
    this.courses = this.coursesService.all()
      .subscribe(result => this.courses = result);
  }

  saveCourse(course: Course) {
    if (course.id) {
      // if it exists, we will call service to update
      this.updateCourse(course);
    }
    else {
      this.createCourse(course);
    }
    console.log('Save course', course)
  }

  // when creating a course, we will update with this course and subscribe to it to see if we finished
  createCourse(course: Course) {
    this.coursesService.createCourse(course)
      .subscribe(result => this.fetchCourses())
  }

  updateCourse(course: Course) {
    this.coursesService.updateCourse(course)
    .subscribe(result => this.fetchCourses());
  }

  reset() {
    const emptyCourse: Course = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false
    };
    this.selectCourse(emptyCourse);
  }


  constructor(private coursesService: CoursesService) { }


}
