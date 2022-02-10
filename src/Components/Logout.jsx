import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";

const Logout = ({ redirect, mobile = false }) => {
  let navigate = useNavigate();
  const logoutFn = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    navigate(redirect);
  };

  return (
    <Tooltip title="logout" arrow>
      {mobile ? (
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="logout"
          onClick={(e) => logoutFn()}
        >
          <LogoutIcon />
        </IconButton>
      ) : (
        <Button
          variant="outlined"
          startIcon={<LogoutIcon />}
          color="inherit"
          onClick={(e) => logoutFn()}
        >
          Logout
        </Button>
      )}
    </Tooltip>
  );
};

export default Logout;
