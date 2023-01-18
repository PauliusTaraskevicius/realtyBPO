import { SessionProvider } from "next-auth/react"

import "../styles/globals.css";
import { Fragment } from "react";
import CssBaseline from "@mui/material/CssBaseline";

export default function App({Component, pageProps: {session, ...pageProps}}) {
  return (
    <Fragment>
      <CssBaseline />
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Fragment>
  );
}
