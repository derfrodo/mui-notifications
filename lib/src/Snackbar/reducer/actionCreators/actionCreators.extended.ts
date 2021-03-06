// This file has been generated by reducer-gen (@Stefan Pauka) written in 2020.

// import { APP_STATES } from "../../interfaces/APP_STATES";
import ExtenedReducerAction, {
    SnackbarReducerActionsExtended,
} from "./../reducerActions/reducerActions.extended";
import { SnackbarData } from "../../interfaces/SnackbarData";
import extendedActions from "./../actions/action.extended";

/**
 * You may add here extending actionCreators for this features reducer
 * actionCreator: ([params]): ExtenedReducerAction => (
 * {
 *   type: extendedActions["[actionName]"],
 *   [payload]
 * }),
 *
 */
export const extendedActionCreators = {
    addSnackbarData: (next: SnackbarData): SnackbarReducerActionsExtended => {
        return { type: extendedActions.ADD_SNACKBAR_DATA, next };
    },
    removeSnackbarData: (
        next: SnackbarData
    ): SnackbarReducerActionsExtended => {
        return { type: extendedActions.REMOVE_SNACKBAR_DATA, next };
    },
};

type ActionCreator = {
    [key in string]: (...params: any[]) => ExtenedReducerAction;
};

const checkActionCreator: <T>(item: T & ActionCreator) => T = <T>(
    item: T & ActionCreator
) => {
    return item;
};

export const appActionCreatorsExtended = checkActionCreator(
    extendedActionCreators
);

export default appActionCreatorsExtended;
