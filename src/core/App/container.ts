import { startApp } from "core/store/actions/AppActions";
import { Store } from "core/store/reducers";
import { getReady } from "core/store/selectors/AppSelectors";
import { Ready } from "core/store/states/AppState";
import { connect } from "react-redux";
import { AppPresentation } from "./component";

export interface ReduxMappedStateProps {
  isReady: Ready;
}

export interface ReduxMappedDispatchProps {
  startApp: () => void;
}

const mapStateToProps = (state: Store): ReduxMappedStateProps => ({
  isReady: getReady(state)
});

const mapDispatchToProps: ReduxMappedDispatchProps = {
  startApp
};

export const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppPresentation);
