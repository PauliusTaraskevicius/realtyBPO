import { useSession } from "next-auth/react";
import Box from "@mui/material/Box";

import ReportsList from "../../components/reports/reportsList";

function Reports() {
  const { data: session, status } = useSession();

  return (
    <>
      {status === "authenticated" ? (
        <ReportsList />
      ) : (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <h1>You have no permission</h1>
        </Box>
      )}
    </>
  );
}

export default Reports;
