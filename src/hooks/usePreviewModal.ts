import { useContext } from "react";

import { PreviewContext } from "@/contexts/preview-context";

export const usePreviewModal = () => {
  const context = useContext(PreviewContext);
  if (!context) {
    throw new Error("usePreviewModal must be used within PreviewProvider");
  }
  return context;
};
