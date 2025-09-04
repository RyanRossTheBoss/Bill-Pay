"use client";

import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";
import SmoothScroll from "@/components/SmoothScroll";
import { PropsWithChildren } from "react";

export default function SessionProvider({ children }: PropsWithChildren) {
  return (
    <NextAuthSessionProvider>
      <SmoothScroll />
      {children}
    </NextAuthSessionProvider>
  );
}
