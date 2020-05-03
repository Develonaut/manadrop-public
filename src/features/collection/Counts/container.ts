import { Store } from "core/store/reducers";
import { getSelectedCollectionItemsById } from "core/store/selectors/CollectionSelectors";
import { connect } from "react-redux";
import { CountsPresentation } from "./component";

const mapStateToProps = (state: Store) => ({
  itemsById: getSelectedCollectionItemsById(state)
});

export const Counts = connect(mapStateToProps)(CountsPresentation);
