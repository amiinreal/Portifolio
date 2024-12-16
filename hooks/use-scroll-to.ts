"use client";

import { useCallback } from "react";

export function useScrollTo(elementId: string) {
  return useCallback(() => {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: "smooth" });
  }, [elementId]);
}