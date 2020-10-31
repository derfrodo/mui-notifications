import React from "react";
import ConfirmData, { ConfirmTypes } from "./interfaces/ConfirmData";
import {
    notificationsActionCreators,
    useNotificationsReducerContext,
} from "./reducer";

export const useNotifications = () => {
    const { dispatch } = useNotificationsReducerContext();

    const addConfirm = React.useCallback(
        (confirmData: ConfirmData) => {
            const {
                onClose: oC,
                onDeny: od,
                onConfirm: oCon,
                ...rest
            } = confirmData;

            const onClose = () => {
                if (oC) {
                    oC();
                }

                const closed: ConfirmData = { ...nextConfirm, closed: true };
                dispatch(
                    notificationsActionCreators.updateConfirmDatas(
                        nextConfirm,
                        closed
                    )
                );
                setTimeout(
                    () =>
                        dispatch(
                            notificationsActionCreators.removeConfirmDatas(
                                closed
                            )
                        ),
                    300
                );
            };

            const onConfirm = oCon
                ? () => {
                      if (oCon) {
                          oCon();
                      }
                      onClose();
                  }
                : undefined;

            const onDeny = od
                ? () => {
                      if (od) {
                          od();
                      }
                      onClose();
                  }
                : undefined;

            const nextConfirm = { ...rest, onClose, onConfirm, onDeny };

            dispatch(notificationsActionCreators.addConfirmDatas(nextConfirm));
        },
        [dispatch]
    );

    const addError = React.useCallback(
        (
            message: React.ReactNode,
            options?: Partial<Omit<ConfirmData, "message" | "type">>
        ) => {
            addConfirm({
                title: "Fehler",
                ...(options || {}),
                message,
                type: ConfirmTypes.ERROR,
            });
        },
        [addConfirm]
    );

    const addWarning = React.useCallback(
        (
            message: React.ReactNode,
            options?: Partial<Omit<ConfirmData, "message" | "type">>
        ) => {
            addConfirm({
                title: "Warnung",
                ...(options || {}),
                message,
                type: ConfirmTypes.WARN,
            });
        },
        [addConfirm]
    );

    const addQuestion = React.useCallback(
        (
            message: React.ReactNode,
            options?: Partial<Omit<ConfirmData, "message" | "type">>
        ) => {
            addConfirm({
                title: "Question",
                ...(options || {}),
                message,
                type: ConfirmTypes.QUESTION,
            });
        },
        [addConfirm]
    );
    const addInfo = React.useCallback(
        (
            message: React.ReactNode,
            options?: Partial<Omit<ConfirmData, "message" | "type">>
        ) => {
            addConfirm({
                title: "Info",
                ...(options || {}),
                message,
                type: ConfirmTypes.INFO,
            });
        },
        [addConfirm]
    );
    return React.useMemo(
        () => ({
            addConfirm,
            addError,
            addQuestion,
            addWarning,
            addInfo,
        }),
        [addConfirm, addError, addInfo, addQuestion, addWarning]
    );
};

export default useNotifications;
