"use client";

import { SessionProvider } from "next-auth/react";
import SmoothScroll from "@/components/SmoothScroll";
import { PropsWithChildren } from "react";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <SessionProvider>
      <SmoothScroll />
      {children}
    </SessionProvider>
  );
}


