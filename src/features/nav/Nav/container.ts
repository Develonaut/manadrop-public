import { setUI } from "core/store/actions/UIActions";
import { Store } from "core/store/reducers";
import { getNavState } from "core/store/selectors/UISelectors";
import { connect } from "react-redux";
import { NavPresentation } from "./component";

const mapStateToProps = (state: Store) => ({
  isOpen: getNavState(state)
});

const mapDispatchToProps = {
  setUI
};

export const Nav = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavPresentation);
