import { Action } from 'redux';
import { AppPart } from './appPart.model';
import * as AppPartActions from './appPart.actions';
import { createSelector } from 'reselect';

/**
 * This file describes the state concerning Users, how to modify it through
 * the reducer, and the selectors.
 */
export interface AppPartState {
    currentAppPart: AppPart;
}

const initialState: AppPartState = {
    currentAppPart: null
};

export const AppPartReducer =
    function (state: AppPartState = initialState, action: Action): AppPartState {
        switch (action.type) {
            case AppPartActions.DO_SOMETHING:
                const appPartProp: AppPart = (<AppPartActions.DoSomethingAction>action).appPartProp;
                return {
                    currentAppPart: appPartProp
                };
            default:
                return state;
        }
    };

export const getAppPartState = (state): AppPartState => state.appPart;

export const getSomethingSpecific = createSelector(
    getAppPartState,
    (state: AppPartState) => state.currentAppPart);
