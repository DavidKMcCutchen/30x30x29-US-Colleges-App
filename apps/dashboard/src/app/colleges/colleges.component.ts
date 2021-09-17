import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { College, emptyCollege } from '@colleges/api-interfaces';
import { CollegeFacade } from '@colleges/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'colleges-colleges',
  templateUrl: './colleges.component.html',
  styleUrls: ['./colleges.component.scss']
})
export class CollegesComponent implements OnInit {
  allColleges$: Observable<College[]> = this.collegeFacade.allColleges$;
  selectedCollege$: Observable<College> = this.collegeFacade.selectedColleges$;

  form: FormGroup;

  constructor(
    private collegeFacade: CollegeFacade,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.collegeFacade.mutations$.subscribe((_) => this.resetCollege());
  }

  ngOnInit() {
    this.initForm();
    this.collegeFacade.loadColleges();
    this.resetCollege()

    const collegeRouteId = this.route.snapshot.params['id'];

    if (collegeRouteId) {
      this.loadCollege((collegeRouteId))
    }
  }

  viewCollege(collegeId: string) {
    this.router.navigate(["colleges", collegeId])
  }

  loadCollege(collegeId: string) {
    this.collegeFacade.selectCollege(collegeId);
    this.collegeFacade.loadCollege(collegeId);
  }

  selectCollege(college: College) {
    this.collegeFacade.selectCollege(college.name)
    this.form.patchValue(college);
  }

  saveCollege(college: College) {
    this.collegeFacade.saveCollege(college);
  }

  deleteCollege(college: College) {
    this.collegeFacade.deleteCollege(college);
  }

  resetCollege() {
    this.form.reset();
    this.selectCollege(emptyCollege)
  }

  private initForm() {
    this.form = this.formBuilder.group({
      country: ['null'],
      name: [''],
      alpha_two_code: [''],
      "state-province": [null],
      domains: [['']],
      web_pages: [['']]
    })
  }
}
