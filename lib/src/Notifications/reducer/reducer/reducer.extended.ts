// This file has been generated by reducer-gen (@Stefan Pauka) written in 2020.

import extendedActions from "./../actions/action.extended";
import getDefaultState from "./../defaultState.base.generated";
import NotificationsReducerActions from "./../reducerActions/reducerActions.main.generated";
import State from "./../state";

// Uncomment for some typechecking:
// import { isNotificationsReducerActionsBase } from "./../reducerActions/reducerActions.base.generated";
// import { isNotificationsReducerActionsExtended } from "./../reducerActions/reducerActions.extended";

/**
 * You may add here extending reducer behaviors for this features reducer
 */

const notificationsReducerExtended = (
  state: State = getDefaultState(),
  action: NotificationsReducerActions
): State => {
  switch (action.type) {
    case extendedActions.NOTIFICATIONS_ADD_CONFIRM_DATA:
      return { ...state, confirmDatas: [...state.confirmDatas, action.data] };
    case extendedActions.NOTIFICATIONS_REMOVE_CONFIRM_DATA:
      return {
        ...state,
        confirmDatas: state.confirmDatas.filter((d) => d !== action.data),
      };
    case extendedActions.NOTIFICATIONS_UPDATE_CONFIRM_DATA:
      return {
        ...state,
        confirmDatas: state.confirmDatas.map((d) =>
          d === action.old ? action.next : d
        ),
      };
    //         case actions["[actionName]"]:
    //             return {
    //                 ...state,
    //                 // [action payload]
    //            };
    //         case extendedActions["[actionName]"]:
    //             return {
    //                 ...state,
    //                 // [action payload]
    //              };
    default:
      return state;
  }
};

export default notificationsReducerExtended;