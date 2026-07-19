import type { Metadata } from "next";

import { NotFoundPage } from "@/components/not-found/NotFoundPage";

export const metadata: Metadata = {
  title: "Page not found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return <NotFoundPage />;
}
