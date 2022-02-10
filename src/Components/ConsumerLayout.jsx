import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";

const ConsumerLayout = () => {
  return (
    <Box>
      <Outlet />
    </Box>
  );
};

export default ConsumerLayout;
