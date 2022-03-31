import Avatar from "@mui/material/Avatar";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import CopyRight from "../../Components/CopyRight";
import Grid from "@mui/material/Grid";

import LinearProgress from "@mui/material/LinearProgress";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import PopupAlert from "../../Components/PopupAlert";
import { RESET_PASSWORD_URL } from "../../Utils/urls";
import GlowingText from "../../Components/GlowingText";

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
    <Box
      sx={{
        backgroundColor: "#2BFFD6",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpath fill='%232cffe6' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/%3E%3Cpath fill='%232dfff5' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/%3E%3Cpath fill='%232df9ff' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/%3E%3Cpath fill='%232eeaff' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/%3E%3Cpath fill='%232FDBFF' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/%3E%3Cpath fill='%232fc6ff' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/%3E%3Cpath fill='%232fb1ff' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/%3E%3Cpath fill='%23309cff' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/%3E%3Cpath fill='%233088ff' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/%3E%3Cpath fill='%233073FF' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          sx={{ mb: 3 }}
        >
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                pt: { xs: 3, md: 8 },
              }}
            >
              <Container maxWidth="sm">
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="text.primary"
                  gutterBottom
                >
                  <b>Recover</b> Your <GlowingText text="Loyalty Points" />{" "}
                  Account
                </Typography>
                <Box sx={{ display: { xs: "none", md: "inline-grid" } }}>
                  <Typography
                    variant="h5"
                    align="center"
                    color="text.secondary"
                    paragraph
                  >
                    Rewards to the customers for their purchases. Redeem their
                    points on their next purchase.
                  </Typography>
                  <Stack
                    sx={{ pt: 4 }}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                  >
                    <Button variant="contained" href="/consumer/signup">
                      Get Started
                    </Button>
                  </Stack>
                </Box>
              </Container>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Container
              component="main"
              maxWidth="xs"
              sx={{ mt: { xs: 2 }, pt: { xs: 3 } }}
            >
              <Paper
                sx={{
                  my: { xs: 2, md: 6 },
                  p: { xs: 2, md: 3 },
                  borderRadius: 5,
                }}
                elevation={10}
              >
                <Box
                  sx={{
                    my: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
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
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          mt: 3,
                        }}
                      >
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
                      <Box
                        sx={{
                          width: "100%",
                        }}
                      >
                        <Tooltip
                          title={`Password Strength is ${
                            score <= 1
                              ? "Weak"
                              : score === 2
                              ? "Average"
                              : score === 3
                              ? "Good"
                              : "Strong"
                          }`}
                        >
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
                            sx={{
                              borderRadius: 5,
                              p: 1,
                              m: 1,
                            }}
                          />
                        </Tooltip>
                      </Box>
                      <Box sx={{ mt: 1 }}>
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          label="Password"
                          name="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          placeholder="New Password"
                          autoFocus
                        />
                        {password.length > 4 && (
                          <Box
                            sx={{
                              width: "100%",
                            }}
                          >
                            {/* Password Strength Display */}

                            {feedback.warning.length > 1 && (
                              <Tooltip title="Warning">
                                <Typography
                                  variant="subtitle1"
                                  color="white"
                                  align="center"
                                  sx={{
                                    borderRadius: 2,
                                    m: 1,
                                    p: 1,
                                    background:
                                      "linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%)",
                                  }}
                                >
                                  {feedback.warning}
                                </Typography>
                              </Tooltip>
                            )}
                          </Box>
                        )}
                        {feedback.suggestions.length > 1 && (
                          <Tooltip title="Tip">
                            <Typography
                              variant="subtitle2"
                              color="#7177a8"
                              align="center"
                            >
                              Tip : {feedback.suggestions}
                            </Typography>
                          </Tooltip>
                        )}
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          label="Confirm Password"
                          name="confirm password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          type="password"
                          placeholder="Re-Type New Password"
                        />

                        <Button
                          onClick={(e) => handleSubmit()}
                          fullWidth
                          variant="contained"
                          disabled={
                            password.length >= 5 && confirmPassword.length >= 5
                              ? false
                              : true
                          }
                          sx={{
                            my: 2,
                          }}
                        >
                          Update Password
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
                </Box>
              </Paper>
            </Container>
          </Grid>
        </Grid>
      </Box>
      <CopyRight />
    </Box>
  );
};

export default ResetPassword;
