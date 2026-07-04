import Script from "next/script";

import { DMCHAMP_CHAT_WIDGET_URL } from "@/lib/constants";

export function DmChampWidget() {
  return (
    <Script src={DMCHAMP_CHAT_WIDGET_URL} strategy="afterInteractive" />
  );
}
