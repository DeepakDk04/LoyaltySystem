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
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import CopyRight from "../../Components/CopyRight";
import PopupAlert from "../../Components/PopupAlert";
import { VERIFY_BASE_URL } from "../../Utils/urls";

const VerifyConsumer = () => {
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);
  const params = useParams();
  const [searchParams] = useSearchParams();
  const token = params.token;
  const emailId = searchParams.get("email");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token || !emailId) {
      setError("Invalid Url");
      return;
    }
    const VERIFY_URL = `${VERIFY_BASE_URL}/${token}?email=${emailId}`;
    const credentials = {
      password: password,
    };
    setLoading(true);
    try {
      const { data, status, statusText } = await axios.post(
        VERIFY_URL,
        credentials
      );
      console.log(data);
      console.log(status);
      console.log(statusText);
      // notif: user is verified
      setSuccess("You are Verified");
      setLoading(false);
      setVerified(true);
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
          {verified ? (
            <Box>
              <Typography
                component="h1"
                variant="h5"
                align="center"
                color="secondary"
              >
                Congradulations! You are verified successfuly
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                <Button href="/login" size="small">
                  Login
                </Button>
              </Box>
              <PopupAlert
                message={success}
                clearMessage={setSuccess}
                alertType="success"
              />
            </Box>
          ) : (
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
                Verify Your Email
              </Typography>
              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={password.length >= 5 ? false : true}
                  sx={{ mt: 3, mb: 2 }}
                >
                  Verify Me
                </Button>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
                <Button href="/forget-password" size="small">
                  Forgot password?
                </Button>
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
        </Paper>
        <CopyRight sx={{ mt: 10, mb: 4 }} />
      </Container>
    </Box>
  );
};

export default VerifyConsumer;
