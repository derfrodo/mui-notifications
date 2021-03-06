// This file has been generated by reducer-gen (@Stefan Pauka) written in 2020.
// DO NOT Change anything inside this file. Every time the generator is used, it will be overwritten.

import NotificationsReducerActionsBase, { isNotificationsReducerActionsBase } from "./reducerActions.base.generated";
import NotificationsReducerActionsExtended, { isNotificationsReducerActionsExtended } from "./reducerActions.extended";

export type NotificationsReducerActions = NotificationsReducerActionsBase | NotificationsReducerActionsExtended;

export const isNotificationsReducerActions = (item: any): item is NotificationsReducerActions => {
    return isNotificationsReducerActionsBase(item) || isNotificationsReducerActionsExtended(item);
}

export default NotificationsReducerActions;
