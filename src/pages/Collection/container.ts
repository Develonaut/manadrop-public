import {
  Collection as ICollection,
  CollectionItemsById
} from "core/lib/Collection";
import { Store } from "core/store/reducers";
import {
  getCollectionsSets,
  getSelectedCollection,
  getSelectedCollectionItemsById
} from "core/store/selectors/CollectionSelectors";
import { SetsById } from "core/store/states/CollectionsState";
import { connect } from "react-redux";
import { CollectionPresentation } from "./component";

export interface ReduxMappedStateProps {
  setsById: SetsById;
  selectedCollection: ICollection;
  itemsById: CollectionItemsById;
}

const mapStateToProps = (state: Store): ReduxMappedStateProps => ({
  setsById: getCollectionsSets(state),
  selectedCollection: getSelectedCollection(state),
  itemsById: getSelectedCollectionItemsById(state)
});

export const Collection = connect(mapStateToProps)(CollectionPresentation);
