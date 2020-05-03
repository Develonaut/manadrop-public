import { Track } from "core/lib/Analytics";
import { track } from "core/store/actions/AnalyticsActions";
import {
  resetUI,
  ResetUIAction,
  UI_CONTEXT_SEARCH_CARDS
} from "core/store/actions/UIActions";
import { Store } from "core/store/reducers";
import { getSearchContext } from "core/store/selectors/UISelectors";
import { connect } from "react-redux";
import { PortalPresentation } from "./component";

export interface ReduxMappedStateProps {
  isOpen: boolean;
}

export interface ReduxMappedDispatchProps {
  resetUI: () => ResetUIAction;
  track: (event: Track) => void;
}

const mapStateToProps = (state: Store) => ({
  isOpen: getSearchContext(state) === UI_CONTEXT_SEARCH_CARDS
});

const mapDispatchToProps = {
  track,
  resetUI
};

export const Portal = connect(
  mapStateToProps,
  mapDispatchToProps
)(PortalPresentation);
