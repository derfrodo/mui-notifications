export interface ConfirmData {
  closed?: boolean;
  message: React.ReactNode;
  title?: React.ReactNode;

  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;

  type?: ConfirmTypes;

  onConfirm?: () => void | Promise<void>;
  onClose?: () => void | Promise<void>;
  onDeny?: () => void | Promise<void>;
}

export enum ConfirmTypes {
  ERROR = "ERROR",
  WARN = "WARN",
  QUESTION = "QUESTION",
  INFO = "INFO",
}

export default ConfirmData;
