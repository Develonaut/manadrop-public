import { Fade } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { useInView } from "react-intersection-observer";

export interface PublicProps {
  alt: string;
  src: string;
  className?: string;
  lazyload?: boolean;
}

export const Image: FunctionComponent<PublicProps> = ({
  lazyload = true,
  className,
  alt,
  src
}: PublicProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0
  });
  return lazyload ? (
    <Fade in={inView}>
      <img
        data-testid="image"
        ref={ref}
        alt={alt}
        className={className}
        src={inView ? src : undefined}
      />
    </Fade>
  ) : (
    <img
      data-testid="image"
      ref={ref}
      alt={alt}
      className={className}
      src={src}
    />
  );
};
