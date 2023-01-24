import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { textAlign } from "@mui/system";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" textAlign='center'>
      {"Copyright ©"}
      <Link color="inherit" href="#">
        realtyBPO
      </Link>{" "}
      {new Date().getFullYear()}{" "}
    </Typography>
  );
}

function Footer() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        component="footer"
        sx={{ py: 3, px: 2, mt: "auto", backgroundColor: "primary" }}
      >
        <Container maxWidth="sm"  justifyContent='space-between'>
          <Container sx={{display: 'inline-flex', justifyContent:'center', marginBottom: 1}}>
            <Typography variant="body1" marginRight={2}>
              Privacy
            </Typography>
            <Typography variant="body1">
              Terms
            </Typography>
          </Container>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}

export default Footer;
