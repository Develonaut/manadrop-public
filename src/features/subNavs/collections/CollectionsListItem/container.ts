import { selectCollection } from "core/store/actions/CollectionActions";
import { connect } from "react-redux";

import { Collection, CollectionId } from "core/lib/Collection";
import { Store } from "core/store/reducers";
import { getCollectionById } from "core/store/selectors/CollectionSelectors";
import { CollectionsListItemPresentation } from "./component";

type ContainerProps = Collection & {
  selectedId: CollectionId;
};

const mapStateToProps = (state: Store, props: ContainerProps) => ({
  collection: getCollectionById(state)(props.id)
});

const mapDispatchToProps = {
  selectCollection
};

export const CollectionsListItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionsListItemPresentation);
