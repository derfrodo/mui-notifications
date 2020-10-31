export enum SNACKBAR_TYPES {
    INFO = "INFO",
    ERROR = "ERROR",
    WARNING = "WARNING",
    SUCCESS = "SUCCESS",
}
export interface SnackbarData {
    message: string; //React.ReactNode;
    title?: string; //React.ReactNode;
    closed?: boolean;
    type?: SNACKBAR_TYPES;
}
