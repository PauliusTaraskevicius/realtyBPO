import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <>Loading...</>;
  }

  if (status === "authenticated") {
    return (
      <>
        Signed in as {session.user.email} {session.user.name}
        <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  if (status === "unauthenticated") {
    return (
      <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </>
    );
  }
}
