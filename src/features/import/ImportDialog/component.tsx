import { useTheme } from "@material-ui/core/styles";
import axios from "axios";
import { parseTextFormat } from "core/utils/import";
import React, { FunctionComponent, useEffect, useState } from "react";

import {
  Button,
  Dialog as MUIDialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Input,
  useMediaQuery
} from "@material-ui/core";
import { APIUrls, getUrl } from "core/config/urls";

export const ImportDialog: FunctionComponent = () => {
  const theme = useTheme();
  const isMobileHook = useMediaQuery(theme.breakpoints.down("xs"));
  const [isMobile, setIsMobile] = useState(isMobileHook);
  const [isOpen, setIsOpen] = useState(true);
  const [value, setValue] = useState("");
  const [type] = useState("text");

  const onClose = () => setIsOpen(false);

  const onSubmit = async () => {
    const parser: any = {
      text: parseTextFormat
    };

    const importPromises = parser[type](value).map(({ quantity, name }: any) =>
      axios(
        getUrl({
          url: APIUrls.SCRYFALL_CARD_NAME,
          queryParams: { exact: name }
        })
      )
        .then(res => ({
          ...res.data,
          quantity
        }))
        .catch(e => {
          console.error(e);
        })
    );

    const results = await Promise.all(importPromises);
    console.log(results);
  };

  const onChange = ({ target: { value = "" } }) => {
    console.log(parseTextFormat(value));
    setValue(value);
  };

  useEffect(() => {
    setIsMobile(isMobileHook);
  }, [isMobileHook]);

  return (
    <MUIDialog
      fullScreen={isMobile}
      open={isOpen}
      onClose={onClose}
      aria-labelledby="responsive-dialog"
    >
      <DialogTitle id="responsive-dialog-title" />
      <DialogContent>
        <Input
          value={value}
          onChange={onChange}
          disableUnderline={true}
          placeholder="Add Cards"
          aria-label="Import Cards"
          multiline={true}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onSubmit}>Import</Button>
      </DialogActions>
    </MUIDialog>
  );
};
