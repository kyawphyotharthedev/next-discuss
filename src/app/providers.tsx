import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";

interface providerProps {
  children: React.ReactNode;
}

export default function Providers({ children }: providerProps) {
  return (
    <SessionProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </SessionProvider>
  );
}
