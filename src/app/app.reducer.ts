/* tslint:disable:typedef */

import {
    Reducer,
    combineReducers
} from 'redux';
import {
    AppPartState,
    AppPartReducer
} from './appPart/appPart.reducer';
export * from './appPart/appPart.reducer';

export interface AppState {
    appPart: AppPartState;
}

const rootReducer: Reducer<AppState> = combineReducers<AppState>({
    appPart: AppPartReducer,
});

export default rootReducer;
