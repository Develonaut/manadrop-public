import { Track } from "core/lib/Analytics";
import { Collection } from "core/lib/Collection";
import { TrackAction } from "core/store/actions/AnalyticsActions";
import { track } from "core/store/actions/AnalyticsActions";
import { updateCollection } from "core/store/actions/CollectionActions";
import { UpdateCollectionAction } from "core/store/actions/CollectionActions";
import { ResetUIAction } from "core/store/actions/UIActions";
import {
  resetUI,
  UI_CONTEXT_COLLECTION_RENAME
} from "core/store/actions/UIActions";
import { Store } from "core/store/reducers";
import { getSelectedCollection } from "core/store/selectors/CollectionSelectors";
import { getDialogContext } from "core/store/selectors/UISelectors";
import { connect } from "react-redux";
import { RenameDialogPresentation } from "./component";

export interface ReduxMappedStateProps {
  isOpen: boolean;
  collection: Collection;
}

export interface ReduxMappedDispatchProps {
  updateCollection: (collection: Collection) => UpdateCollectionAction;
  track: (event: Track) => TrackAction;
  resetUI: () => ResetUIAction;
}

const mapStateToProps = (state: Store) => ({
  collection: getSelectedCollection(state),
  isOpen: getDialogContext(state) === UI_CONTEXT_COLLECTION_RENAME
});

const mapDispatchToProps = {
  track,
  resetUI,
  updateCollection
};

export const RenameDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(RenameDialogPresentation);
