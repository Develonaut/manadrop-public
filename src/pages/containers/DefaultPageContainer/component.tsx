import classNames from "classnames";
import { PublicProps as SEOProps, SEO } from "core/SEO/component";
import React, { FunctionComponent } from "react";

import { Notifier } from "core/Notifier";
import { AppBar } from "features/appBar";
import { Dialog as FTUDialog } from "features/ftu";
import { Nav } from "features/nav";

import { styles } from "./styles";

export interface PublicProps {
  seo: SEOProps;
  className?: string;
}

export const DefaultPageContainer: FunctionComponent<PublicProps> = ({
  seo,
  children,
  className = ""
}) => {
  const classes = styles();
  return (
    <main
      data-test-selector="main"
      className={classNames([classes.root, className])}
    >
      <SEO {...seo} />
      <Nav />
      <div data-test-selector="content" className={classes.content}>
        <AppBar />
        {children}
      </div>
      <Notifier />
      <FTUDialog />
    </main>
  );
};
