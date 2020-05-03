import { setUI, SetUIAction } from "core/store/actions/UIActions";
import { Store } from "core/store/reducers";
import { getNavState } from "core/store/selectors/UISelectors";
import { Nav, SetUIState } from "core/store/states/UIState";
import { connect } from "react-redux";
import { ToggleNavButtonPresentation } from "./component";

export interface ReduxMappedStateProps {
  isOpen: Nav;
}

export interface ReduxMappedDispatchProps {
  setUI: (state: SetUIState) => SetUIAction;
}

const mapStateToProps = (state: Store) => ({
  isOpen: getNavState(state)
});

const mapDispatchToProps = {
  setUI
};

export const ToggleNavButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToggleNavButtonPresentation);
