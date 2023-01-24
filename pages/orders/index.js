import { useSession } from "next-auth/react";
import Box from "@mui/material/Box";

import OrdersList from "../../components/orders/ordersList";

function Orders() {
  const { data: session, status } = useSession();

  return (
    <>
      {status === "authenticated" ? (
        <OrdersList />
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

export default Orders;
