import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { College } from '@colleges/api-interfaces';

@Component({
  selector: 'colleges-college-details',
  templateUrl: './college-details.component.html',
  styleUrls: ['./college-details.component.scss']
})
export class CollegeDetailsComponent {
  currentCollege: College;
  originalTitle: string;
  

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set college(value) {
    if (value) this.originalTitle = value.name;
    this.currentCollege = {...value}
  }

  @Input() form: FormGroup;

  save(formDirective: FormGroupDirective) {
    this.saved.emit(formDirective.value);
    formDirective.resetForm();
  };

  cancel() {
    this.cancelled.emit();
  }
}

