import { Component, OnInit } from '@angular/core';
import { Lesson } from '../common/models/lesson';
import { LessonsService } from '../common/services/lessons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  lessons$;
  lessons:Lesson[] = [];

  constructor(private lessonsService: LessonsService) {}

  selectedLesson: {title: string};

  selectLesson(lesson:{title:string}):void {
    this.selectedLesson = lesson;
    // console.log(this.selectedCourse);
  }
  ngOnInit() {
    this.lessons = this.lessonsService.lessons;
    this.lessons$ = this.lessonsService.lessons$;
  }
}
