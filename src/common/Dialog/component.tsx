import { useTheme } from "@material-ui/core/styles";
import React, {
  ComponentType,
  FunctionComponent,
  useEffect,
  useState
} from "react";

import {
  Dialog as MUIDialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useMediaQuery
} from "@material-ui/core";

export interface PublicProps {
  open: boolean;
  onClose: () => void;
  Title: ComponentType;
  Hero?: ComponentType;
  Content: ComponentType;
  Actions?: ComponentType;
  classes?: object;
}

export const Dialog: FunctionComponent<PublicProps> = ({
  open,
  onClose,
  classes = {},
  Title,
  Hero = () => null,
  Actions = () => null,
  Content
}: PublicProps) => {
  const theme = useTheme();
  const isMobileHook = useMediaQuery(theme.breakpoints.down("xs"));
  const [isMobile, setIsMobile] = useState(isMobileHook);

  useEffect(() => {
    setIsMobile(isMobileHook);
  }, [isMobileHook]);

  return (
    <MUIDialog
      fullScreen={isMobile}
      open={open}
      onClose={onClose}
      aria-labelledby="responsive-dialog"
    >
      <DialogTitle id="responsive-dialog-title">
        <Title />
      </DialogTitle>
      <DialogContent>
        <Hero />
        <Content />
      </DialogContent>
      <DialogActions>
        <Actions />
      </DialogActions>
    </MUIDialog>
  );
};
