import { createAction, props } from "@ngrx/store";
import {  College } from "@colleges/api-interfaces";

// Select Entity

export const selectCollege = createAction(
    '[COLLEGE] Select College',
    props<{ collegeId: string }>()
);

// Load all Entities

export const loadColleges = createAction(
    '[COLLEGE] Load Colleges'
);

export const loadCollegesSuccess = createAction(
    '[COLLEGE] Load Colleges Success',
    props<{ colleges: College[]}>()
);

export const loadCollegesFailed = createAction(
    '[COLLEGE] Load Colleges Failed',
    props<{ error: any }>()
);

// Load Single Entity

export const loadCollege = createAction(
    '[COLLEGE] Load College',
    props<{ collegeId: string}>()
);

export const loadCollegeSuccess = createAction(
    '[COLLEGE] Load College Success',
    props<{ college: College}>()
);

export const loadCollegeFailed = createAction(
    '[COLLEGE] Load College Failed',
    props<{ error: any}>()
);

// Load Create Entity

export const createCollege = createAction(
    '[COLLEGE] Create College',
    props<{ college: College}>()
);

export const createCollegeSuccess = createAction(
    '[COLLEGE] Create College Success',
    props<{ college: College}>()
);

export const createCollegeFailed = createAction(
    '[COLLEGE] Create College Failed',
    props<{ error: any}>()
);

// Load Update Entity

export const updateCollege = createAction(
    '[COLLEGE] Update College',
    props<{ college: College}>()
);

export const updateCollegeSuccess = createAction(
    '[COLLEGE] Update College Success',
    props<{ college: College}>()
);

export const updateCollegeFailed = createAction(
    '[COLLEGE] Create College Failed',
    props<{ error: any}>()
);

// Load Delete Entity

export const deleteCollege = createAction(
    '[COLLEGE] Delete College',
    props<{ college: College}>()
);

export const deleteCollegeSuccess = createAction(
    '[COLLEGE] Delete College Success',
    props<{ college: College}>()
);

export const deleteCollegeFailed = createAction(
    '[COLLEGE] Create College Failed',
    props<{ error: any}>()
);