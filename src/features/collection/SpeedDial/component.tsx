import { I18n } from "@aws-amplify/core";
import { UI_CONTEXT_SEARCH_CARDS } from "core/store/actions/UIActions";
import { EVENTS } from "core/utils/trackingHelpers";
import * as React from "react";
import { ReduxMappedDispatchProps, ReduxMappedStateProps } from "./container";

import { faFileExport, faFileImport } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fade } from "@material-ui/core";
import MUISpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import { AddLayer, NoItemsArrowHelper } from "common/SVGs";

import { styles } from "./styles";

type Props = ReduxMappedStateProps & ReduxMappedDispatchProps;

export const SpeedDialPresentation: React.FunctionComponent<Props> = ({
  itemsById,
  track: dispatchTrack,
  setUI: dispatchSetUI
}: Props) => {
  const classes = styles();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const handleAdd = () => {
    dispatchTrack({
      eventName: EVENTS.SPEED_DIAL_ADD
    });
    dispatchSetUI({ search: UI_CONTEXT_SEARCH_CARDS });
  };

  const handleExport = () => {
    console.log("Exporting library");
  };

  const handleImport = () => {
    console.log("Importing Library");
  };

  const actions = [
    {
      icon: <AddLayer className={classes.speedDialIcon} />,
      name: I18n.get("Add"),
      onClick: handleAdd
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faFileImport}
          className={classes.speedDialIcon}
        />
      ),
      name: I18n.get("Import: coming soon"),
      onClick: handleImport
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faFileExport}
          className={classes.speedDialIcon}
        />
      ),
      name: I18n.get("Export: coming soon"),
      onClick: handleExport
    }
  ];

  return (
    <>
      <Fade in={!Object.keys(itemsById).length && !open}>
        <NoItemsArrowHelper className={classes.arrowHelper} />
      </Fade>
      <MUISpeedDial
        ariaLabel="Speed Dial"
        className={classes.root}
        classes={{
          fab: classes.speedDial
        }}
        onBlur={handleClose}
        onClick={handleClick}
        onClose={handleClose}
        onFocus={handleOpen}
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        icon={<SpeedDialIcon />}
        open={open}
      >
        {actions.map(action => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.onClick}
            className={classes.speedDialAction}
            data-test-selector={action.name}
          />
        ))}
      </MUISpeedDial>
    </>
  );
};
