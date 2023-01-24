import { Fragment } from "react";

import Footer from "./footer";
import Navigation from "./main-navigation";

function Layout(props) {
  const { children } = props;

  return (
    <Fragment>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
