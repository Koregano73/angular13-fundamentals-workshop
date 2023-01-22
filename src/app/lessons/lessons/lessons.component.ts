import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Lesson } from 'src/app/common/models/lesson';
@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent {
  @Input() lessons:Lesson[];
  @Output() selected = new EventEmitter();
}
