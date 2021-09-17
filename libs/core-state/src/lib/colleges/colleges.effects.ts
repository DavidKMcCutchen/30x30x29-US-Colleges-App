import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { College } from "@colleges/api-interfaces";
import { CollegeService } from "@colleges/core-data";
import * as CollegeActions from './colleges.actions';
import { map } from "rxjs/operators";
import { fetch, pessimisticUpdate } from "@nrwl/angular";

@Injectable()
export class CollegeEffects{
    loadCollege$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CollegeActions.loadCollege),
            fetch({
                run: (action) =>
                    this.collegeService
                        .getOne(action.collegeId)
                        .pipe(map((college: College) => CollegeActions.loadCollegeSuccess({ college }))),
                    onError: (action, error) => CollegeActions.loadCollegeFailed({ error })    
            })
        ));
    loadColleges$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CollegeActions.loadColleges),
            fetch({
                run: () =>
                    this.collegeService
                    .getAll()
                    .pipe(
                        map((colleges: College[]) => CollegeActions.loadCollegesSuccess({ colleges }))
                    ),
                onError: (action, error) => CollegeActions.loadCollegesFailed({ error })    
            })
        ));
    //     createCollege$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(CollegeActions.createCollege),
    //         pessimisticUpdate({
    //             run: (action) =>
    //                 this.collegesService
    //                     .create(action.college)
    //                     .pipe(map((college: College) => CollegeActions.createCollegeSuccess({ college }))),
    //                 onError: (action, error) => CollegeActions.createCollegeFailed({ error })    
    //         })
    // ));

    // updateCollege$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(CollegeActions.updateCollege),
    //         pessimisticUpdate({
    //             run: (action) =>
    //                 this.collegesService
    //                     .update(action.college)
    //                     .pipe(map((college: College) => CollegeActions.updateCollegeSuccess({ college}))),
    //                 onError: (action, error) => CollegeActions.updateCollegeFailed({ error })    
    //         })
    // ));

    // deleteCollege$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(CollegeActions.deleteCollege),
    //         pessimisticUpdate({
    //             run: (action) =>
    //                 this.collegesService
    //                     .delete(action.college)
    //                     .pipe(
    //                         map(() => CollegeActions.deleteCollegeSuccess({ college: action.college }))
    //                     ),
    //                 onError: (action, error) => CollegeActions.deleteCollegeFailed({ error })    
    //         })
    //     ));    


    constructor(
        private actions$: Actions,
        private collegeService: CollegeService
    ) {}    
}