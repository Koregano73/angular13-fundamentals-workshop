import { Component, OnInit } from '@angular/core';
import { Lesson } from '../common/models/lesson';
import { CoursesService } from '../common/services/courses.service';
import { LessonsService } from '../common/services/lessons.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  courses$;
  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.courses$ = this.coursesService.all();
  }

}
