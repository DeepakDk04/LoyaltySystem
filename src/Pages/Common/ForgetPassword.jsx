import Avatar from "@mui/material/Avatar";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { useState } from "react";
import axios from "axios";

import CopyRight from "../../Components/CopyRight";
import PopupAlert from "../../Components/PopupAlert";
import { FORGET_PASSWORD_URL } from "../../Utils/urls";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [requested, setRequested] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = {
      email,
    };
    setLoading(true);
    try {
      const { data, status, statusText } = await axios.post(
        FORGET_PASSWORD_URL,
        credentials
      );
      console.log(data);
      console.log(status);
      console.log(statusText);
      setRequested(true);
      setLoading(false);
    } catch (err) {
      // notif: user is not verified
      setError(err.response.data.error);
      console.log(err.response.data);
      setLoading(false);
    }
  };

  return (
    <Box>
      <Container
        component="main"
        maxWidth="xs"
        sx={{ mt: { xs: 3 }, pt: { xs: 3 } }}
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
            <Avatar sx={{ mb: 2, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            {requested ? (
              <Box>
                <Typography
                  variant="h5"
                  gutterBottom
                  align="center"
                  color="secondary.light"
                >
                  Kindly, Check Your Email
                </Typography>
                <Box component="div" sx={{ mt: 2 }}>
                  <Typography
                    textAlign="center"
                    variant="subtitle2"
                    gutterBottom
                  >
                    Password Reset Link in sent to your email , You can reset
                    your password there.
                  </Typography>
                </Box>
              </Box>
            ) : (
              <Box>
                <Typography component="h1" variant="h5" align="center">
                  Forget Password
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Email Address"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    autoFocus
                    helperText="we will send the reset link to your email"
                  />
                  <Box
                    sx={{
                      my: 3,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      disabled={email.length >= 5 ? false : true}
                    >
                      Get Password Reset Link
                    </Button>
                  </Box>
                </Box>
                <Backdrop
                  sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                  }}
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
            )}
            <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
              <Button href="/login" size="small">
                Go to Sign IN
              </Button>
            </Box>
          </Box>
        </Paper>
        <CopyRight sx={{ mt: 10, mb: 4 }} />
      </Container>
    </Box>
  );
};

export default ForgetPassword;
