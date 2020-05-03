import React, { lazy, Suspense } from "react";

const SearchPortal = lazy(() =>
  import(/* webpackChunkName: "Portal"*/ "./container").then(({ Portal }) => ({
    default: Portal
  }))
);

export const AsyncPortal = () => (
  <Suspense fallback={null}>
    <SearchPortal />
  </Suspense>
);
