import { Track } from "core/lib/Analytics";
import { track } from "core/store/actions/AnalyticsActions";
import {
  updateCollectionItem,
  UpdateCollectionItem
} from "core/store/actions/CollectionActions";
import { connect } from "react-redux";
import { CountPresentation } from "./component";

export interface ReduxMappedDispatchProps {
  updateCollectionItem: (params: UpdateCollectionItem) => void;
  track: (event: Track) => void;
}

const mapDispatchToProps = {
  updateCollectionItem,
  track
};

export const Count = connect(
  null,
  mapDispatchToProps
)(CountPresentation);
