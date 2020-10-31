// This file has been generated by reducer-gen (@Stefan Pauka) written in 2020.
// DO NOT Change anything inside this file. Every time the generator is used, it will be overwritten.

import React from "react";
import State from "./state";
import notificationsReducer from "./reducer/reducer.main.generated";
import NotificationsReducerActions from "./reducerActions/reducerActions.main.generated";
import getNotificationsDefaultState from "./defaultState.base.generated";

export interface INotificationsReducerContext {
    state: State;
    dispatch: React.Dispatch<NotificationsReducerActions>;
}

export type IDispatchNotificationsReducerContext = React.Dispatch<NotificationsReducerActions>;

export type IStateNotificationsReducerContext = State;

export const NotificationsReducerContext = React.createContext<INotificationsReducerContext>({
    state: getNotificationsDefaultState(),
    dispatch: () => undefined,
});

export const DispatchNotificationsReducerContext = React.createContext<IDispatchNotificationsReducerContext>(() => undefined);

export const StateNotificationsReducerContext = React.createContext<IStateNotificationsReducerContext>(getNotificationsDefaultState());

export const NotificationsReducerContextProvider = (props: {
    children: React.ReactNode;
}) => {
    const { children } = props;

    const [state, dispatch] = React.useReducer(
    notificationsReducer,
    undefined,
    getNotificationsDefaultState
    );

    const context: {
    state: State;
    dispatch: React.Dispatch<NotificationsReducerActions>;
    } = React.useMemo(() => ({ state, dispatch }), [state, dispatch]);

    return (
    <DispatchNotificationsReducerContext.Provider value={dispatch}>
        <StateNotificationsReducerContext.Provider value={state}>
            <NotificationsReducerContext.Provider value={context}>
                {children}
            </NotificationsReducerContext.Provider>
        </StateNotificationsReducerContext.Provider>
    </DispatchNotificationsReducerContext.Provider>
    );
};

export const useNotificationsReducerContext: () => INotificationsReducerContext = () => {
    return React.useContext<INotificationsReducerContext>(NotificationsReducerContext);
};

export const useNotificationsReducerContextState: () => IStateNotificationsReducerContext = () => {
    return React.useContext<IStateNotificationsReducerContext>(StateNotificationsReducerContext);
};

export const useNotificationsReducerContextDispatch: () => IDispatchNotificationsReducerContext = () => {
    return React.useContext<IDispatchNotificationsReducerContext>(DispatchNotificationsReducerContext);
};