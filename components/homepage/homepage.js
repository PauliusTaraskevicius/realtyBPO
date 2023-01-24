import Box from "@mui/material/Box";

import Login from "../login/login";

function HomePage(props) {
  return (
    <Box>
      <Login credentials={props.credentials} />
    </Box>
  );
}

export default HomePage;
