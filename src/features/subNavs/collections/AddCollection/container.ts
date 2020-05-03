import { createCollection } from "core/store/actions/CollectionActions";
import { connect } from "react-redux";
import { AddCollectionPresentation } from "./component";

const mapDispatchToProps = {
  createCollection
};

export const AddCollection = connect(
  null,
  mapDispatchToProps
)(AddCollectionPresentation);
