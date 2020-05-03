import { Store } from "core/store/reducers";
import {
  getSelectedCollectionItemsById,
  getSelectedCollectionName
} from "core/store/selectors/CollectionSelectors";
import { connect } from "react-redux";
import { NamePresentation } from "./component";

const mapStateToProps = (state: Store) => ({
  itemsById: getSelectedCollectionItemsById(state),
  name: getSelectedCollectionName(state)
});

export const Name = connect(mapStateToProps)(NamePresentation);
