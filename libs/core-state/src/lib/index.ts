import { ActionReducerMap } from "@ngrx/store";
import * as fromColleges from './colleges/colleges.reducer';

export interface AppState {
    [fromColleges.COLLEGE_FEATURE_KEY]: fromColleges.CollegeState
};

export const reducers: ActionReducerMap<AppState> = {
    [fromColleges.COLLEGE_FEATURE_KEY]: fromColleges.collegeReducer
};