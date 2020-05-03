import { I18n } from "@aws-amplify/core";
import { FTU_DIALOG } from "core/utils/cookies";
import moment from "moment";
import React, { FunctionComponent, useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { content } from "../content";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider, IconButton, Typography } from "@material-ui/core";
import { Dialog as CommonDialog } from "common/Dialog";
import dungeonDoorImg from "images/jpgs/dungeon-door.jpg";

import { styles } from "./styles";

export const Dialog: FunctionComponent = () => {
  const classes = styles();
  const [isOpen, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const cookies = new Cookies();
    const hasSeen = cookies.get(FTU_DIALOG);
    if (!hasSeen) {
      setOpen(true);
      cookies.set(FTU_DIALOG, moment().format());
    }
  }, [setOpen]);

  const Title = () => (
    <section className={classes.header}>
      <div>
        <Typography className={classes.title}>
          {I18n.get("Hey There – Welcome to Manadrop!")}
        </Typography>
        <Typography className={classes.date}>
          {moment().format("MMM DD, YYYY")}
        </Typography>
      </div>
      <IconButton className={classes.closeButton} onClick={handleClose}>
        <FontAwesomeIcon icon={faTimes} />
      </IconButton>
    </section>
  );

  const Hero = () => (
    <img className={classes.hero} src={dungeonDoorImg} alt="First Time User" />
  );

  const Content = () => (
    <>
      <header className={classes.contentHeader}>
        <Typography className={classes.contentHeaderTitle}>
          {I18n.get("What's New?")}
        </Typography>
        <Divider className={classes.divider} variant="fullWidth" />
      </header>
      <ul className={classes.list}>
        {content.map((text, idx) => (
          <li key={idx} className={classes.listItem}>
            <Typography dangerouslySetInnerHTML={{ __html: text }} />
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <CommonDialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
      Title={Title}
      Hero={Hero}
      Content={Content}
    />
  );
};
