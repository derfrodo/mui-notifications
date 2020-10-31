import {
  useAppReducerContextDispatch,
  appActionCreators,
} from "../App/reducer";
import { SnackbarData, SNACKBAR_TYPES } from "../App/interfaces/SnackbarData";
import { useCallback, useMemo } from "react";

export const useAddSnackbar = () => {
  const dispatch = useAppReducerContextDispatch();

  const addSnackbar = useCallback(
    (next: SnackbarData & { closed?: false | undefined }) => {
      dispatch(appActionCreators.addSnackbarData(next));
    },
    [dispatch]
  );

  const add = useCallback(
    (message: string, title?: string, type?: SNACKBAR_TYPES) => {
      addSnackbar({
        message,
        type,
        title,
      });
    },
    [addSnackbar]
  );

  const addSuccess = useCallback(
    (message: string, title?: string) => {
      add(message, title, SNACKBAR_TYPES.SUCCESS);
    },
    [add]
  );

  const addError = useCallback(
    (message: string, title?: string) => {
      add(message, title, SNACKBAR_TYPES.ERROR);
    },
    [add]
  );
  const addWarning = useCallback(
    (message: string, title?: string) => {
      add(message, title, SNACKBAR_TYPES.WARNING);
    },
    [add]
  );

  return useMemo(
    () => ({
      add,
      addError,
      addSuccess,
      addSnackbar,
      addWarning,
    }),
    [add, addError, addSnackbar, addSuccess, addWarning]
  );
};
