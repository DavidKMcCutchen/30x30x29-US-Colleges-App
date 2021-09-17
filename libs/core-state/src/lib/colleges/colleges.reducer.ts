import { College } from "@colleges/api-interfaces";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as CollegeActions from './colleges.actions';

export const COLLEGE_FEATURE_KEY = 'colleges';

export interface CollegeState extends EntityState<College> {
    selectedId?: string | number;
    loaded: boolean;
    error?: string | null;
};

export interface CollegePartialState {
    readonly [COLLEGE_FEATURE_KEY]: CollegeState
};

export const collegeAdapter: EntityAdapter<College> = createEntityAdapter<College>({ selectId: (c) => c.name });

export const initialCollegeState: CollegeState = collegeAdapter.getInitialState(
    {
        loaded: false
    }
);

const onFailed = (state, { error }): CollegeState => ({ ...state, error});

const onDispatch = (state, action): CollegeState => ({
    ...state,
    loaded: false,
    error: null
});

const _collegeReducer = createReducer(
    initialCollegeState,
    on(
        CollegeActions.loadCollegeFailed,
        CollegeActions.loadCollegesFailed,
        CollegeActions.createCollegeFailed,
        CollegeActions.updateCollegeFailed,
        CollegeActions.deleteCollegeFailed,
        onFailed
    ),
    on(
        CollegeActions.loadCollege,
        CollegeActions.loadColleges,
        CollegeActions.createCollege,
        CollegeActions.updateCollege,
        CollegeActions.deleteCollege,
        onDispatch
    ),
    on(
        CollegeActions.loadCollegeSuccess, (state, { college }) =>
        collegeAdapter.upsertOne(college, {...state, loaded: true})
    ),
    on(
        CollegeActions.selectCollege, (state, { collegeId }) => ({
            ...state,
            selectedId: collegeId
        })
    ),
    on(
        CollegeActions.loadCollegesSuccess, (state, { colleges }) =>
        collegeAdapter.setAll(colleges, {...state, loaded: true})
    ),
    on(
        CollegeActions.deleteCollegeSuccess, (state, { college }) =>
        collegeAdapter.removeOne(college.name, {...state, loaded: true})
    ),
    on(
        CollegeActions.updateCollegeSuccess, (state, { college }) =>
        collegeAdapter.updateOne(
            {id: college.name, changes: college},
            {...state, loaded: true}
        )
    ),
    on(
        CollegeActions.createCollegeSuccess, (state, {college }) =>
        collegeAdapter.addOne(college, {...state, loaded: true})
    ),
)

export function collegeReducer(
    state: CollegeState | undefined,
    action: Action
) {
    return _collegeReducer(state, action)
}