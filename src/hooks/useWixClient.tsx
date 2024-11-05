"use client";

import { WixClientContext } from "@/context/wixContext";
import { useContext } from "react";

export const useWixClient = () => {
  const wixContext = useContext(WixClientContext);

  if (!wixContext) {
    throw new Error(
      "useWixClientContext must be used within a WixClientContextProvider"
    );
  }
  return wixContext;
};
