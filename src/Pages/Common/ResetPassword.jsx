import Avatar from "@mui/material/Avatar";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import CopyRight from "../../Components/CopyRight";
import LinearProgress from "@mui/material/LinearProgress";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import PopupAlert from "../../Components/PopupAlert";
import { RESET_PASSWORD_URL } from "../../Utils/urls";

//password strength check
import { zxcvbn, ZxcvbnOptions } from "@zxcvbn-ts/core";
import zxcvbnCommonPackage from "@zxcvbn-ts/language-common";
import zxcvbnEnPackage from "@zxcvbn-ts/language-en";

// options for password checker
const options = {
  dictionary: {
    ...zxcvbnCommonPackage.dictionary,
    ...zxcvbnEnPackage.dictionary,
  },
  translations: zxcvbnEnPackage.translations,
};
ZxcvbnOptions.setOptions(options);

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [requested, setRequested] = useState(false);
  const [searchParams] = useSearchParams();
  const resetToken = searchParams.get("resetToken");

  //password strengh score
  const { score, feedback } = zxcvbn(password);

  const getPassStrentgh = (score) => {
    switch (score) {
      case 0:
        return 1;
      case 1:
        return 10;
      case 2:
        return 40;
      case 3:
        return 80;
      case 4:
        return 100;

      default:
        return 1;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!resetToken) {
      setError("Invalid Url");
      return;
    }
    if (password !== confirmPassword) {
      setError("Password doesn't match with Confirm password");
      return;
    }
    const resetPasswordUrl = `${RESET_PASSWORD_URL}?resetToken=${resetToken}`;
    const credentials = {
      password,
    };
    setLoading(true);
    try {
      const { data, status, statusText } = await axios.post(
        resetPasswordUrl,
        credentials
      );
      console.log(data);
      console.log(status);
      console.log(statusText);
      setLoading(false);
      setRequested(true);
    } catch (err) {
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
                  Password Updated
                </Typography>
                <Box component="div" sx={{ mt: 2 }}>
                  <Typography
                    textAlign="center"
                    variant="subtitle2"
                    gutterBottom
                  >
                    Now You can use your new password to login
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                  <Button href="/login" size="small">
                    Go to Sign IN
                  </Button>
                </Box>
              </Box>
            ) : (
              <Box>
                <Typography
                  component="h1"
                  variant="h5"
                  align="center"
                  gutterBottom
                >
                  Reset Password
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
                    placeholder="New Password"
                    autoFocus
                    helperText={
                      password.length > 4 &&
                      feedback.suggestions.length > 1 &&
                      `Tip : ${feedback.suggestions}`
                    }
                  />
                  {password.length > 4 && (
                    <Box>
                      {/* Password Strength Display */}
                      <Typography variant="body2" align="center">
                        Password Strength
                      </Typography>
                      <LinearProgress
                        variant="determinate"
                        value={getPassStrentgh(score)}
                        color={
                          score <= 1
                            ? "error"
                            : score === 2
                            ? "warning"
                            : "success"
                        }
                      />
                      {feedback.warning.length > 1 && (
                        <Typography
                          variant="subtitle1"
                          color="error"
                          align="center"
                        >
                          warning : {feedback.warning}
                        </Typography>
                      )}
                    </Box>
                  )}
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="New Password Again"
                    label="Confirm Password"
                    type="password"
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
                      disabled={
                        password.length >= 5 && confirmPassword.length >= 5
                          ? false
                          : true
                      }
                    >
                      Update Password
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
          </Box>
        </Paper>
        <CopyRight sx={{ mt: 10, mb: 4 }} />
      </Container>
    </Box>
  );
};

export default ResetPassword;
