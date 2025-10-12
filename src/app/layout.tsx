import Layout from "@/components/Layout/Layout";
import { ReactNode } from "react";
import "@/styles/globals.css";

export const metadata = {
  title: "Resume 강수정",
  description: "4년차 프론트엔드 개발자 강수정입니다 🦊",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
