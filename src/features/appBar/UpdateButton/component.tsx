import React, { FunctionComponent } from "react";
import { ReduxMappedStateProps } from "./container";

import { IconButton, Tooltip, Zoom } from "@material-ui/core";
import { CauldronIcon } from "common/SVGs";

import { I18n } from "@aws-amplify/core";
import { styles } from "./styles";

type Props = ReduxMappedStateProps;

export const UpdateButtonPresentation: FunctionComponent<Props> = ({
  isUpdateAvailable
}) => {
  const classes = styles();

  const handleClick = async () => {
    // Add a listener for when the service worker registration is changing
    // so we can reload to show the updated changes.
    let refreshing = false;
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (refreshing) return;
      window.location.reload();
      refreshing = true;
    });
    // Get the registration and send a message to skipWaiting and update the Service Worker.
    const SWRegistration = await navigator.serviceWorker.getRegistration();
    if (SWRegistration && !!SWRegistration.waiting)
      SWRegistration.waiting.postMessage({ type: "SKIP_WAITING" });
  };

  if (!isUpdateAvailable) return null;
  return (
    <Tooltip title={I18n.get("Update Ready!")} TransitionComponent={Zoom}>
      <IconButton onClick={handleClick} className={classes.button}>
        <CauldronIcon className={classes.icon} />
      </IconButton>
    </Tooltip>
  );
};
