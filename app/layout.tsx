import type { Metadata } from "next";
import "@/styles/globals.css";

const metadata: Metadata = {
  title: "Intend - Billing solution for school daycare centers",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export { metadata };
export default RootLayout;
