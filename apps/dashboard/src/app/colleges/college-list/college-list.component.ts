import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { College } from '@colleges/api-interfaces';

@Component({
  selector: 'colleges-college-list',
  templateUrl: './college-list.component.html',
  styleUrls: ['./college-list.component.scss']
})
export class CollegeListComponent {
  @Input() colleges: College[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() collegeViewed = new EventEmitter();
}
