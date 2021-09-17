import { Injectable } from "@angular/core";
import { College } from "@colleges/api-interfaces";
import { Action, ActionsSubject, select, Store } from "@ngrx/store";
import { map, filter } from "rxjs/operators";
import * as CollegeActions from './colleges.actions';
import * as CollegeSelectors from './colleges.selectors';
import * as fromColleges from './colleges.reducer';


@Injectable({
    providedIn: 'root'
})

export class CollegeFacade {
    allColleges$ = this.store.pipe(
        map((state) => CollegeSelectors.getAllColleges(state)),
    )
    selectedColleges$ = this.store.pipe(select(CollegeSelectors.getSelectedCollege));
    loaded$ = this.store.pipe(select(CollegeSelectors.getCollegesLoaded));

    mutations$ = this.actions$.pipe(
        filter((action: Action) =>
        action.type === CollegeActions.createCollege({} as any) .type ||
        action.type === CollegeActions.updateCollege({} as any) .type ||
        action.type === CollegeActions.deleteCollege({} as any) .type 
        ))

        selectCollege(collegeId: string) {
            this.dispatch(CollegeActions.selectCollege({ collegeId }));
        };

        loadColleges() {
            this.dispatch(CollegeActions.loadColleges())
        };

        loadCollege(collegeId: string) {
            this.dispatch(CollegeActions.loadCollege({ collegeId }))
        };

        saveCollege(college: College) {
            college.name ? this.updateCollege(college) : this.createCollege(college)
        };

        createCollege(college: College) {
            this.dispatch(CollegeActions.createCollege({ college }))
        };

        updateCollege(college: College) {
            this.dispatch(CollegeActions.updateCollege({ college }))
        };

        deleteCollege(college: College) {
            this.dispatch(CollegeActions.deleteCollege({ college }))
        };

        dispatch(action: Action) {
            this.store.dispatch(action)
        };

        constructor(
            private store: Store<fromColleges.CollegePartialState>,
            private actions$: ActionsSubject
        ) {}
}