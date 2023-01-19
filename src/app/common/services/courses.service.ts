import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../models/course';

const BASE_URL = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  model = 'courses';

  constructor(private http: HttpClient) {}

  // get all stuff
  all() {
    return this.http.get(this.getUrl());
  }

  // find specific item in url
  find(id) {
    return this.http.get(this.getUrlWithID(id));
  }

  // post request or create course
  createCourse(course : Course) {
    return this.http.post(this.getUrl(), course);
  }

  // update now
  updateCourse(course: Course) {
    return this.http.put(this.getUrlWithID(course.id), course);
  }

  //delete specific course with id
  deleteCourse(id: number) {
    return this.http.delete(this.getUrlWithID(id));
  }


  private getUrlWithID(id: number) {
    return `${this.getUrl()}/${id}`;
  }

  private getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

}
