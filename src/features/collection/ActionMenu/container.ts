import { deleteCollection } from "core/store/actions/CollectionActions";
import { setUI } from "core/store/actions/UIActions";
import { connect } from "react-redux";
import { ActionMenuPresentation } from "./component";

export interface ReduxMappedDispatchProps {
  deleteCollection: () => void;
  setUI: (params: object) => void;
}

export const mapDispatchToProps: ReduxMappedDispatchProps = {
  deleteCollection,
  setUI
};

export const ActionMenu = connect(
  null,
  mapDispatchToProps
)(ActionMenuPresentation);
