import { removeSnackbar } from "core/store/actions/SnackbarActions";
import { Store } from "core/store/reducers";
import { getSnackbars } from "core/store/selectors/SnackbarSelectors";
import { withSnackbar } from "notistack";
import { connect } from "react-redux";
import { NotifierPresentation } from "./component";

const mapStateToProps = (state: Store) => ({
  snackbars: getSnackbars(state)
});

const mapDispatchToProps = {
  removeSnackbar
};

export const Notifier = withSnackbar(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NotifierPresentation)
);
