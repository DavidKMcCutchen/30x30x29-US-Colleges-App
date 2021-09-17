import { emptyCollege } from "@colleges/api-interfaces";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { collegeAdapter, CollegeState, COLLEGE_FEATURE_KEY } from "./colleges.reducer";

export const getCollegeState = createFeatureSelector<CollegeState>(COLLEGE_FEATURE_KEY);

const { selectAll, selectEntities } = collegeAdapter.getSelectors();

export const getCollegesLoaded = createSelector(
    getCollegeState,
    (state: CollegeState) => state.loaded
);

export const getCollegeError = createSelector(
    getCollegeState,
    (state: CollegeState) => state.error
);

export const getAllColleges = createSelector(
    getCollegeState,
    (state: CollegeState) => selectAll(state)
);

export const getCollegeEntities = createSelector(
    getCollegeState,
    (state: CollegeState) => selectEntities(state)
);

export const getSelectedCollegeId = createSelector(
    getCollegeState,
    (state: CollegeState) => state.selectedId
);

export const getSelectedCollege = createSelector(
    getCollegeEntities,
    getSelectedCollegeId,
    (entities, selectedId) => (selectedId && entities[selectedId]) || emptyCollege
);