import { Snackbar } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { SNACKBAR_TYPES } from "../../App/interfaces/SnackbarData";
import { snackbarActionCreators, useSnackbarReducerContext } from "../reducer";

export const StateBoundSnackBar = () => {
    const { state, dispatch } = useSnackbarReducerContext();
    const { snackbarDatas } = state;

    const [lastData, setLastData] = useState(
        snackbarDatas.length > 0 ? snackbarDatas[0] : undefined
    );

    const openMessages = useMemo(() => snackbarDatas.filter((d) => !d.closed), [
        snackbarDatas,
    ]);

    useEffect(() => {
        if (openMessages.length > 0 && openMessages[0] !== lastData) {
            setLastData(openMessages[0]);
        }
    }, [lastData, openMessages, snackbarDatas]);

    const close = useCallback(() => {
        if (lastData) {
            dispatch(snackbarActionCreators.removeSnackbarData(lastData));
        }
    }, [dispatch, lastData]);

    let color: "error" | "warning" | "info" | "success" | undefined = undefined;
    switch (lastData?.type) {
        case SNACKBAR_TYPES.SUCCESS:
            color = "success";
            break;
        case SNACKBAR_TYPES.INFO:
            color = "info";
            break;
        case SNACKBAR_TYPES.WARNING:
            color = "warning";
            break;
        case SNACKBAR_TYPES.ERROR:
            color = "error";
            break;
        default:
            color = undefined;
            break;
    }

    return (
        <Snackbar
            open={openMessages.length > 0 && openMessages[0] === lastData}
            autoHideDuration={6000}
            onClose={close}
        >
            <Alert severity={color}>
                {typeof lastData?.title === "string" ? (
                    <AlertTitle>{lastData?.title}</AlertTitle>
                ) : (
                    ""
                )}
                {lastData?.message || ""}
            </Alert>
        </Snackbar>
    );
};
