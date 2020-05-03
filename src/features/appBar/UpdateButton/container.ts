import { Store } from "core/store/reducers";
import { getUpdateAvailable } from "core/store/selectors/UISelectors";
import { UpdateAvailable } from "core/store/states/UIState";
import { connect } from "react-redux";
import { UpdateButtonPresentation } from "./component";

export interface ReduxMappedStateProps {
  isUpdateAvailable: UpdateAvailable;
}

const mapStateToProps = (state: Store) => ({
  isUpdateAvailable: getUpdateAvailable(state)
});

export const UpdateButton = connect(mapStateToProps)(UpdateButtonPresentation);
