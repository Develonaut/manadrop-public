import {
  addCollectionItem,
  deleteCollectionItem
} from "core/store/actions/CollectionActions";
import { Card } from "core/types/Card";
import { connect } from "react-redux";
import { OverlayPresentation } from "./component";

export interface ReduxMappedDispatchProps {
  deleteCollectionItem: (item: Card) => void;
  addCollectionItem: (item: Card) => void;
}

const mapDispatchToProps = {
  deleteCollectionItem,
  addCollectionItem
};

export const Overlay = connect(
  null,
  mapDispatchToProps
)(OverlayPresentation);
