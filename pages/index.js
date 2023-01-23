import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <>Loading...</>;
  }

  if (status === "authenticated") {
    return (
      <>
        Signed in as {session.user.email} {session.user.name} {session.user.role}<br />
        <button onClick={() => signOut()}>Sign out</button>
        <Image width={100} height={100} src={session.user.image}/>
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
