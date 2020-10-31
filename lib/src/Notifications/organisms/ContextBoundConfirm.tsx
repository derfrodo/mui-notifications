import React, { useMemo } from "react";
import { Confirm } from "../molecules/Confirm";
import { useNotificationsReducerContext } from "../reducer";

export const ContextBoundConfirm = () => {
  const { state } = useNotificationsReducerContext();
  const { confirmDatas } = state;

  const lastConfirm = useMemo(() => {
    return confirmDatas.length > 0 ? confirmDatas[0] : undefined;
  }, [confirmDatas]);

  return <Confirm confirmData={lastConfirm} />;
};

export default ContextBoundConfirm;
