import { APP_STATES } from "../interfaces/APP_STATES";
import { SnackbarData } from "../interfaces/SnackbarData";
import { LOCALE_LANGUAGES } from "../interfaces/LOCALE_LANGUAGES";
import { APP_FEATURES } from "../interfaces/APP_FEATURES";

export interface IState {
  appState: APP_STATES | undefined;
  darkMode: boolean;
  snackbarDatas: SnackbarData[];
  isHeaderExpanded: boolean;
  loadingIndicators: symbol[];
  globalLoadingIndicators: symbol[];

  locale: LOCALE_LANGUAGES | null;

  feature: APP_FEATURES | null;
  appBasePath: string | null;
}

export default IState;
