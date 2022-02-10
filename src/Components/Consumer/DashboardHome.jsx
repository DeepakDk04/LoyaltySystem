import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

import { useState } from "react";
import DashboardBanner from "./DashboardBanner";
import PopupAlert from "../PopupAlert";
import useLocalStorage from "../../Hooks/useLocalStorage";

const secondaryPink = "#ff6987";

const DashboardHome = () => {
  // Similar to useState but first arg is key to the value in local storage.
  const [user, setUser] = useLocalStorage("user", {});
  const [verifyNotif, setVerifyNotif] = useState("");
  const [assignVerfMsg, setAssignVerfMsg] = useState(false);
  const { meta, verify } = user.profile;

  const { firstName, lastName, crown } = meta;
  const { verifiedEmail } = verify;

  if (!verifiedEmail && !assignVerfMsg) {
    setAssignVerfMsg(true);
    console.log("user is not verified");
    setVerifyNotif("Please Verify Your Email");
  }

  const walletBox = (
    <Box
      sx={{
        height: { xs: "150px", md: "200px" },
        width: { xs: "150px", md: "200px" },
        bgcolor: secondaryPink,
        borderRadius: "20px",
        boxShadow: 14,
      }}
    >
      <Box
        sx={{
          display: "flex",
          ml: { xs: 2, md: 5 },
          my: { xs: 1, md: 2 },
          gap: 1,
        }}
      >
        <AccountBalanceWalletIcon sx={{ color: "white" }} />
        <Typography
          component="h1"
          variant="subtitle1"
          align="center"
          color={"white"}
          sx={{ fontWeight: "bold" }}
        >
          wallet points
        </Typography>
      </Box>
      <Typography component="h1" variant="h1" align="center" color={"white"}>
        {user.profile.wallet.points}
      </Typography>
    </Box>
  );

  return (
    <Box>
      <PopupAlert
        message={verifyNotif}
        clearMessage={setVerifyNotif}
        alertType="warning"
      />
      {/* banner */}
      <DashboardBanner
        drawerWidth={240}
        firstName={firstName}
        lastName={lastName}
        crown={crown}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-evenly",
          mt: { xs: 0, md: 5 },
        }}
      >
        {/* wallet */}
        <Tooltip
          title={`${user.profile.wallet.points} wallet points`}
          arrow="true"
        >
          {walletBox}
        </Tooltip>
        <Box
          sx={{
            mt: 5,
          }}
        >
          <Tooltip title={`Latest Transactions`} arrow="true">
            <Typography variant="button" align="center" color="primary">
              Latest Transactions
            </Typography>
          </Tooltip>
          <Typography variant="body1" align="center">
            No Transactions Yet
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardHome;
