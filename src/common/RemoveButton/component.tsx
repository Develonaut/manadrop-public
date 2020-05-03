import { Button } from "@material-ui/core";
import React, { FunctionComponent, MouseEvent } from "react";

import { I18n } from "@aws-amplify/core";
import { styles } from "./styles";

type Variant = "text" | "outlined" | "contained" | undefined;

export interface PublicProps {
  onClick: (event: MouseEvent) => void;
  variant?: Variant;
}

export const RemoveButton: FunctionComponent<PublicProps> = ({
  variant = "contained",
  onClick
}: PublicProps) => {
  const classes = styles();
  return (
    <Button className={classes.root} onClick={onClick} variant={variant}>
      {I18n.get("Remove")}
    </Button>
  );
};
