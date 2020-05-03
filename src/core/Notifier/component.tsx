import { Snackbar } from "core/store/states/SnackbarsState";
import { WithSnackbarProps } from "notistack";
import { FunctionComponent, useState } from "react";

export interface PublicProps {
  snackbars: Snackbar[];
  enqueueSnackbar: (snackbar: Snackbar) => void;
  removeSnackbar: (key: string) => void;
}

export type Props = PublicProps & WithSnackbarProps;

export const NotifierPresentation: FunctionComponent<Props> = ({
  snackbars = [],
  enqueueSnackbar: notistackEnqueueSnackbar,
  removeSnackbar: dispatchRemoveSnackbar
}) => {
  const [displayed, setDisplayed] = useState<string[]>([]);
  snackbars.forEach(({ key = "", message, options }: Snackbar) => {
    setTimeout(() => {
      // If snackbar already displayed, abort
      if (displayed.includes(key)) return;
      // Display snackbar using notistack
      notistackEnqueueSnackbar(message, options);
      // Add snackbar's key to the local state
      setDisplayed([...displayed, key]);
      // Dispatch action to remove the snackbar from the redux store
      dispatchRemoveSnackbar(key);
    }, 1);
  });
  return null;
};
