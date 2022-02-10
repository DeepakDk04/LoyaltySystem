import Avatar from "@mui/material/Avatar";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CopyRight from "../../Components/CopyRight";
import PopupAlert from "../../Components/PopupAlert";
import { SIGNIN_URL } from "../../Utils/urls";
import bg2 from "../../Images/bg2.jpg";

const myStyle = {
  backgroundImage: `url(${bg2})`,
  height: "103vh",
  marginTop: "-25px",
  fontSize: "50px",
  backgroundSize: "cover",
  backgroundRepeat: "repeat-y",
};

const Login = () => {
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const loginAccount = async () => {
    const credentials = {
      password: password,
      email: emailOrPhone,
    };
    console.log("account login for ", credentials);
    setLoading(true);
    try {
      const { data, status, statusText } = await axios.post(
        SIGNIN_URL,
        credentials
      );
      console.log(data);
      console.log(status);
      console.log(statusText);
      setLoading(false);

      // save userdata and redirect
      const { token, userData } = data;
      localStorage.setItem("authToken", token);
      localStorage.setItem("user", JSON.stringify(userData));
      navigate("/consumer/dashboard");
    } catch (err) {
      setError(err.response.data.error);
      console.log(err.response.data);
      setLoading(false);
    }
  };

  return (
    <Box style={myStyle}>
      <Container
        component="main"
        maxWidth="xs"
        sx={{ mt: { xs: 3, md: 1 }, pt: { xs: 3 } }}
      >
        <Paper
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }, borderRadius: 5 }}
          elevation={10}
        >
          <Box
            sx={{
              mt: 2,
              mb: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Email Address or Phone No (curently email only)"
                name="emailOrPhone"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onClick={(e) => setChecked(!checked)}
                    name="checked"
                    color="primary"
                  />
                }
                label="Remember me"
              />

              <Button
                onClick={(e) => loginAccount()}
                fullWidth
                variant="contained"
                disabled={
                  emailOrPhone.length > 5 && password.length > 5 ? false : true
                }
                sx={{ mt: 5, mb: 4 }}
              >
                Sign In
              </Button>
              <Grid container sx={{ mt: 2 }}>
                <Grid item xs>
                  <Link href="/forget-password" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/consumer/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={loading}
            >
              <CircularProgress color="primary" />
            </Backdrop>
            <PopupAlert
              message={error}
              clearMessage={setError}
              alertType="error"
            />
          </Box>
        </Paper>
        <CopyRight sx={{ mt: 5, mb: 4 }} />
      </Container>
    </Box>
  );
};

export default Login;
