import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";

import thoughts from "../../Images/profile_thoughts.svg";

const DashboardBanner = ({ drawerWidth, firstName, lastName, crown }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.only("xs"));
  return (
    <Box
      sx={{
        width: {
          sm: `calc(75% + ${drawerWidth}px)`,
          xs: `calc(25% + ${drawerWidth}px)`,
        },
        height: {
          sm: "200px",
          xs: "170px",
        },
        borderRadius: "20px",
        background:
          "linear-gradient(45deg, rgba(25,118,210,1) 0%, rgba(252,70,107,1) 100%)",
        border: "2px solid primary",
        boxShadow: 14,
        p: 4,
        display: "flex",
        justifyContent: "space-around",
        my: 2,
        ml: { xs: 1, md: 5 },
      }}
    >
      <Box>
        <Typography component="h1" variant="subtitle" color="white">
          {firstName} {lastName}
          <Tooltip title={"crown level"} arrow>
            <Chip
              label={crown}
              variant="outlined"
              sx={{
                color: "gold",
                ml: 2,
                display: { xs: "none", md: "inline" },
              }}
            />
          </Tooltip>
        </Typography>
        <Typography component="h1" variant="caption" color="white">
          Have a wonderfull Day
        </Typography>
        <Button
          variant="outlined"
          size="small"
          sx={{
            color: "white",
            border: "2px solid white",
            boxShadow: 1,
            display: { xs: "none", md: "block" },
            mt: 1,
          }}
        >
          Learn More
        </Button>
      </Box>
      <Tooltip title={firstName} arrow>
        <Box
          sx={{
            transform: {
              xs: "translate(10%,-50%)",
              md: "translate(10%,-25%)",
            },
          }}
        >
          <img
            src={thoughts}
            alt="thoughts"
            width={isMobile ? "150px" : "200px"}
            height={"200px"}
          />
        </Box>
      </Tooltip>
    </Box>
  );
};

export default DashboardBanner;
