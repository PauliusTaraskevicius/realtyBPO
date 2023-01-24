import { useSession, signIn, signOut } from "next-auth/react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import GoogleIcon from '@mui/icons-material/Google';

function Login(props) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        Loading...
      </Box>
    );
  }

//   if (status === "authenticated") {
//     return (
//       <Box
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//         minHeight="100vh"
//       >
//         Signed in as {session.user.email} {session.user.name}
//         <br />
//         <Button variant="contained" onClick={() => signOut()}>Sign out</Button>
//       </Box>
//     );
//   }

  if (status === "unauthenticated") {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        {Object.values(props.credentials).map((provider) => (
          <div key={provider.name}>
            <Button variant="contained" size="large" color="inherit" startIcon={<GoogleIcon color="error" />} onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </Button>
          </div>
        ))}
      </Box>
    );
  }
}

export default Login;
