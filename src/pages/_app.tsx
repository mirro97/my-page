import Layout from "@/components/Layout/Layout";
import Seo from "@/components/Seo";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Seo />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
