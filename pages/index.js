import { getProviders } from "next-auth/react";

import HomePage from "../components/homepage/homepage";

export default function Home({ providers }) {
  return <HomePage credentials={providers} />;
}

export async function getServerSideProps(context) {
  const providers = await getProviders(context);
  return {
    props: { providers },
  };
}
