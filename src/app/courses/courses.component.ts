import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';

import { Course } from '../common/models/course';

const emptyCourse: Course = {
  id: null,
  title: '',
  description: '',
  percentComplete: 0,
  favorite: false
}
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  // 1. render courses in a list
  // 2. select a course
  // 3. render a selected course
  courses: Course[] = [
    {
      id: 1,
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'JavaScript THE HARDEST PARTS EVER',
      description: 'Learn JavaScript like a pro',
      percentComplete: 26,
      favorite: true
    }
  ];

  selectedCourse = emptyCourse;
  originalTitle = '';
  selectCourse(course) {
    // detach selected course from course by deep copying it so dont mutate other states
    this.selectedCourse = {...course};
    this.originalTitle = course.title;
  }

  deleteCourse(courseId) {
    console.log('deleted courseId', courseId);
  }

  reset() {
    // empty selected course
    this.selectCourse({...emptyCourse});
  }

  saveCourse(course: Course) {
    console.log('Save course', course)
  }

  constructor() { }

  ngOnInit(): void {

  }

}
