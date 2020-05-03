import { CreateCollection } from "core/lib/Collection";
import React, { Fragment, FunctionComponent, useState } from "react";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider, IconButton, Input } from "@material-ui/core";

import { styles } from "./styles";

export interface PublicProps {
  createCollection: (collection: CreateCollection) => void;
}

export const AddCollectionPresentation: FunctionComponent<PublicProps> = ({
  createCollection: dispatchCreateCollection
}) => {
  const classes = styles();
  const [collectionName, setCollectionName] = useState("");

  const onClick = () => {
    dispatchCreateCollection({ name: collectionName });
    setCollectionName("");
  };

  const onChange = ({ target: { value = "" } }) => {
    setCollectionName(value);
  };

  return (
    <div className={classes.root}>
      <Input
        disableUnderline={true}
        value={collectionName}
        onChange={onChange}
        placeholder="Add Collection"
        aria-label="Add Collection"
        endAdornment={
          <Fragment>
            <Divider className={classes.divider} />
            <IconButton
              color="primary"
              className={classes.iconButton}
              aria-label="Create Collection"
              onClick={onClick}
            >
              <FontAwesomeIcon icon={faPlus} />
            </IconButton>
          </Fragment>
        }
      />
    </div>
  );
};
