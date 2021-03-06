// This file has been generated by reducer-gen (@Stefan Pauka) written in 2020.
// DO NOT Change anything inside this file. Every time the generator is used, it will be overwritten.

import ConfirmData from "../../interfaces/ConfirmData";
import actions from "./../actions/action.base.generated";
        
export type NotificationsReducerActionsBase = { type: actions } & (
   | {
        type: actions.NOTIFICATIONS_SET_CONFIRM_DATAS;
        next:  ConfirmData[];
    }
);

export const isNotificationsReducerActionsBase = (item: any): item is NotificationsReducerActionsBase => {
    if (!item) { return false; }
    if (typeof item === "object") {
        const { type } = item;

        return typeof type === "string" && actions.hasOwnProperty(type);
    }
    return false;
}

export default NotificationsReducerActionsBase