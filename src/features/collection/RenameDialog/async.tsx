import React, { lazy, Suspense } from "react";

const SearchPortal = lazy(() =>
  import(/* webpackChunkName: "RenameDialog"*/ "./container").then(
    ({ RenameDialog }) => ({
      default: RenameDialog
    })
  )
);

export const AsyncRenameDialog = () => (
  <Suspense fallback={null}>
    <SearchPortal />
  </Suspense>
);
