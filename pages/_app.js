import { SessionProvider } from "next-auth/react";
import Layout from "../components/layout/Layout";

import "../styles/globals.css";
import { Fragment } from "react";
import CssBaseline from "@mui/material/CssBaseline";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <Fragment>
      <SessionProvider session={session}>
        <Layout>
          <CssBaseline />
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </Fragment>
  );
}
