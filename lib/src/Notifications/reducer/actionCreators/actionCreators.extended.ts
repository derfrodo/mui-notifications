// This file has been generated by reducer-gen (@Stefan Pauka) written in 2020.

import ConfirmData from "../../interfaces/ConfirmData";
import ExtenedReducerAction from "./../reducerActions/reducerActions.extended";
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
  addConfirmDatas: (confirmData: ConfirmData): ExtenedReducerAction => ({
    type: extendedActions.NOTIFICATIONS_ADD_CONFIRM_DATA,
    data: confirmData,
  }),
  removeConfirmDatas: (confirmData: ConfirmData): ExtenedReducerAction => ({
    type: extendedActions.NOTIFICATIONS_REMOVE_CONFIRM_DATA,
    data: confirmData,
  }),
  updateConfirmDatas: (old: ConfirmData, next: ConfirmData): ExtenedReducerAction => ({
    type: extendedActions.NOTIFICATIONS_UPDATE_CONFIRM_DATA,
    old,
    next,
  }),
};

type ActionCreator = {
  [key in string]: (...params: any[]) => ExtenedReducerAction;
};

const checkActionCreator: <T>(item: T & ActionCreator) => T = <T>(
  item: T & ActionCreator
) => {
  return item;
};

export const notificationsActionCreatorsExtended = checkActionCreator(
  extendedActionCreators
);

export default notificationsActionCreatorsExtended;