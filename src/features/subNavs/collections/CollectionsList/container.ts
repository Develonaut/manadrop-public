import { Store } from "core/store/reducers";
import {
  getCollectionsSets,
  getSelectedCollectionId
} from "core/store/selectors/CollectionSelectors";
import { connect } from "react-redux";
import { CollectionsListPresentation } from "./component";

const mapStateToProps = (state: Store) => ({
  selectedId: getSelectedCollectionId(state),
  setsById: getCollectionsSets(state)
});

export const CollectionsList = connect(mapStateToProps)(
  CollectionsListPresentation
);
