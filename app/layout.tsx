import "./globals.css";
import "reactjs-tiptap-editor/style.css";

import ClientLayout from "@components/client/Client";

export const metadata = {
  title: "Beranda | CapBridge",
  description: "CapBridge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
