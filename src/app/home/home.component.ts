import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../common/services/lessons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  lessons$;
  lessons = [];

  constructor(private lessonsService: LessonsService) {}

  selectedCourse: {title: string};

  selectCourse(course:{title:string}):void {
    this.selectedCourse = course;
    // console.log(this.selectedCourse);
  }
  ngOnInit() {
    this.lessons = this.lessonsService.lessons;
    this.lessons$ = this.lessonsService.lessons$;
  }
}
