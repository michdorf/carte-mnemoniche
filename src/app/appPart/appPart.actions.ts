import {
    Action,
    ActionCreator
} from 'redux';
import {
    AppPart
} from './appPart.model';

export const DO_SOMETHING = '[appPart] Do Something';
export interface DoSomethingAction extends Action {
    appPartProp: AppPart;
}
export const setCurrentAppPart: ActionCreator<DoSomethingAction> =
    (appPartProp) => ({
        type: DO_SOMETHING,
        appPartProp: appPartProp
    });
