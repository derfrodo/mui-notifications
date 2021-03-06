// This file has been generated by reducer-gen (@Stefan Pauka) written in 2020.

// import { APP_STATES } from "../../interfaces/APP_STATES";
import extenededActions from "./../actions/action.extended";
import { SnackbarData } from "../../interfaces/SnackbarData";

/**
 * You may add here extending reducer actions for this features reducer
 */

export type SnackbarReducerActionsExtended = { type: extenededActions } & (
    | {
          type: extenededActions.ADD_SNACKBAR_DATA;
          next: SnackbarData;
      }
    | {
          type: extenededActions.REMOVE_SNACKBAR_DATA;
          next: SnackbarData;
      }
);

export const isSnackbarReducerActionsExtended = (
    item: any
): item is SnackbarReducerActionsExtended => {
    if (!item) {
        return false;
    }
    if (typeof item === "object") {
        const { type } = item;

        return (
            typeof type === "string" && extenededActions.hasOwnProperty(type)
        );
    }
    return false;
};

export default SnackbarReducerActionsExtended;
