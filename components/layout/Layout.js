import { Fragment } from "react";
import { useSession } from "next-auth/react";
import Footer from "./footer";
import Navigation from "./main-navigation";

function Layout(props) {
  const { children } = props;
  const { data: status } = useSession();
  return (
    <Fragment>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
