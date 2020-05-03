import { Store } from "core/store/reducers";
import { getSelectedCollectionUpdatedTimestamp } from "core/store/selectors/CollectionSelectors";
import { connect } from "react-redux";
import { UpdatedTimestampPresentation } from "./component";

const mapStateToProps = (state: Store) => ({
  timestamp: getSelectedCollectionUpdatedTimestamp(state)
});

export const UpdatedTimestamp = connect(mapStateToProps)(
  UpdatedTimestampPresentation
);
