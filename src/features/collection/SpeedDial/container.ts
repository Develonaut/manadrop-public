import { Track } from "core/lib/Analytics";
import { CollectionItemsById } from "core/lib/Collection";
import { track } from "core/store/actions/AnalyticsActions";
import { setUI } from "core/store/actions/UIActions";
import { Store } from "core/store/reducers";
import { getSelectedCollectionItemsById } from "core/store/selectors/CollectionSelectors";
import { SetUIState } from "core/store/states/UIState";
import { connect } from "react-redux";
import { SpeedDialPresentation } from "./component";

export interface ReduxMappedStateProps {
  itemsById: CollectionItemsById;
}

export interface ReduxMappedDispatchProps {
  setUI: (state: SetUIState) => void;
  track: (event: Track) => void;
}

export const mapStateToProps = (state: Store) => ({
  itemsById: getSelectedCollectionItemsById(state)
});

export const mapDispatchToProps = {
  track,
  setUI
};

export const SpeedDial = connect(
  mapStateToProps,
  mapDispatchToProps
)(SpeedDialPresentation);
