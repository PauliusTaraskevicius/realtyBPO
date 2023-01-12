import "../styles/globals.css";
import { Fragment } from 'react';

import CssBaseline from '@mui/material/CssBaseline';

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <CssBaseline/>
      <Component {...pageProps} />
    </Fragment>
  );
}
