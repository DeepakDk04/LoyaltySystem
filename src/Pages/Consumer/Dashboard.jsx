import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";
import MenuIcon from "@mui/icons-material/Menu";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import SendIcon from "@mui/icons-material/Send";
import HelpIcon from "@mui/icons-material/Help";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { forwardRef, useMemo, useState } from "react";
import { NavLink as RouterLink, Outlet, useLocation } from "react-router-dom";
import Logout from "../../Components/Logout";
import cornerBg from "../../Images/dashboard_corner_bg.svg";
// import cornerBg1 from "../../Images/lost_online_bg.svg";

const drawerWidth = 240;

function ListItemLink(props) {
  const { icon, primary, to, selected } = props;

  const renderLink = useMemo(
    () =>
      forwardRef(function Link(itemProps, ref) {
        return (
          <RouterLink
            to={to}
            ref={ref}
            {...itemProps}
            role={undefined}
            style={({ isActive }) => {
              return {
                color: isActive ? "white" : "#7900FF",
                background: isActive ? "#ff6987" : "white",
              };
            }}
          />
        );
      }),
    [to]
  );

  return (
    <li>
      <ListItem
        button
        component={renderLink}
        selected={selected}
        sx={{
          borderRadius: 2,
          my: 3,
        }}
      >
        {icon ? (
          <ListItemIcon
            sx={{
              color: selected ? "white" : "#7900FF",
            }}
          >
            {icon}
          </ListItemIcon>
        ) : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

const Dashboard = ({ window }) => {
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.only("xs"));
  const authToken = localStorage.getItem("authToken");
  const [mobileOpen, setMobileOpen] = useState(false);

  const drawer = (
    <Box
      sx={{
        my: "auto",
        pb: 5,
        mx: 3,
      }}
      role="presentation"
    >
      <List aria-label="Dashboard Navigation">
        {location.pathname !== "/consumer/dashboard/" && (
          <ListItemLink
            to="/consumer/dashboard/"
            primary="Home"
            icon={<ArrowBackIcon />}
          />
        )}
        <ListItemLink
          selected={location.pathname === "/consumer/dashboard/profile"}
          to="profile"
          primary="Profile"
          icon={<AccountCircleIcon />}
        />
        <ListItemLink
          selected={location.pathname === "/consumer/dashboard/transactions"}
          to="transactions"
          primary="Transactions"
          icon={<SendIcon />}
        />
        <ListItemLink
          selected={location.pathname === "/consumer/dashboard/support"}
          to="support"
          primary="Support"
          icon={<HelpIcon />}
        />
        <ListItemLink
          selected={location.pathname === "/consumer/dashboard/report"}
          to="report"
          primary="Report"
          icon={<ReportProblemIcon />}
        />
      </List>

      {/* <Divider /> */}
    </Box>
  );

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", maxWidth: { xs: "375px", md: "100%" } }}>
      <AppBar
        position="fixed"
        enableColorOnDark
        sx={{
          width: {
            sm: `calc(100% - ${drawerWidth}px)`,
            xs: "100%",
          },
          ml: { sm: `${drawerWidth}px` },
          borderRadius: 3,
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Avatar
            alt="Avatar"
            src={`https://avatars.dicebear.com/api/gridy/love.svg`}
            sx={{
              width: { xs: 24, md: 40 },
              height: { xs: 24, md: 40 },
              ml: 4,
            }}
            variant="rounded"
          />
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            sx={{ display: { xs: "none", md: "block" }, mx: 5 }}
          >
            Greetings for you !
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Logout redirect="/login" mobile={isMobile} />
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: { xs: "none", md: "inline" },
          position: "absolute",
          top: "1%",
          left: "2%",
          zIndex: 2000,
          transform: "translate(0%,-5%)",
        }}
      >
        <img
          src={cornerBg}
          alt="greeting illustration"
          height={"200px"}
          width={"200px"}
        />
      </Box>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="nav links drawer"
      >
        {/* mobile drawer */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background:
                "linear-gradient(45deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
            },
          }}
        >
          {drawer}
        </Drawer>

        {/* desktop drawer */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background:
                "linear-gradient(45deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
              borderRadius: "20px",
              mt: { xs: 0, md: 13 },
              height: "75%",
              boxShadow: 14,
              ml: 3,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: {
            sm: `calc(100% - ${drawerWidth}px)`,
            xs: "100%",
          },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Dashboard;
