import { Store } from "core/store/reducers";
import { getSelectedCollectionCreatedTimestamp } from "core/store/selectors/CollectionSelectors";
import { connect } from "react-redux";
import { CreatedTimestampPresentation } from "./component";

const mapStateToProps = (state: Store) => ({
  timestamp: getSelectedCollectionCreatedTimestamp(state)
});

export const CreatedTimestamp = connect(mapStateToProps)(
  CreatedTimestampPresentation
);
