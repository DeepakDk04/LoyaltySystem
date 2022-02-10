import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { useState, useEffect } from "react";
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

const Signup2 = ({ userData, handleChange, handleNext, handleBack }) => {
  const [errUserName, setErrUserName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(userData.password);
  const [errConfirmPassword, setErrConfirmPassword] = useState("");
  const [errPhoneNo, setErrPhoneNo] = useState("");
  //password strengh score
  const { score, feedback } = zxcvbn(userData.password);

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
        break;
    }
  };
  const isAllFilled = () => {
    if (
      userData.userName &&
      userData.email &&
      userData.password &&
      confirmPassword &&
      userData.phoneNo
    ) {
      return false;
    }
    return true;
  };

  const validations = () => {
    // check userName
    const usernameRegex = new RegExp("^[a-zA-Z0-9_]{5,}[a-zA-Z]+[0-9]*$");
    if (!usernameRegex.test(userData.userName)) {
      setErrUserName(
        "Must be at least 1 letter, at least 5 alphanumerics and the underscore _  allowed, , "
      );
      return false;
    }

    // check email
    const emailRegex = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
    if (!emailRegex.test(userData.email)) {
      setErrEmail("must be a valid email");
      return false;
    }
    // check password
    const passwordRegex = new RegExp(
      "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$"
    );
    if (!passwordRegex.test(userData.password)) {
      setErrPassword(
        "must be valid password, at least 1 number,\nat least 1 special character !@#$%^&* "
      );
      return false;
    }
    // check confirm password

    if (userData.password !== confirmPassword) {
      setErrConfirmPassword("Password doesn't match with confirm password");
      return false;
    }

    // check phoneNo
    const phoneRegex = new RegExp("^[6-9][0-9]{9}$");
    if (!phoneRegex.test(userData.phoneNo)) {
      setErrPhoneNo("must be valid phone number, ie. 9876543210");
      return false;
    }
    // if all values are valid then return true
    return true;
  };

  const moveNext = () => {
    //validation
    if (validations()) {
      console.log("ok");
      handleNext();
    } else {
      console.log("err");
    }
  };

  useEffect(() => {
    // //  clear the errors after 4 sec
    const clearErrors = () => {
      console.log("clear err");
      setErrUserName("");
      setErrEmail("");
      setErrPassword("");
      setErrConfirmPassword("");
      setErrPhoneNo("");
    };
    const errTimeout = setTimeout(() => clearErrors(), 4000);
    return () => clearTimeout(errTimeout);
  }, [errUserName, errEmail, errPassword, errPhoneNo, errConfirmPassword]);

  return (
    <Box>
      <Box
        sx={{
          marginTop: 8,
          marginBottom: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <AccountCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Enter Account Details
        </Typography>
        <Box component="div" sx={{ mt: 1 }}>
          <TextField
            error={errUserName.length !== 0}
            margin="normal"
            required
            fullWidth
            label="Username"
            name="userName"
            value={userData.userName}
            onChange={handleChange}
            autoFocus
            helperText={errUserName}
          />
          <TextField
            error={errEmail.length !== 0}
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            value={userData.email}
            onChange={handleChange}
            helperText={errEmail}
          />
          <TextField
            error={errPassword.length !== 0}
            margin="normal"
            fullWidth
            required
            label="Password"
            name="password"
            type="password"
            value={userData.password}
            onChange={handleChange}
            helperText={errPassword}
          />
          {userData.password.length > 4 && (
            <Box>
              {/* Password Strength Display */}
              <Typography
                variant="body2"
                align="center"
                color={score < 3 ? "primary" : "success"}
              >
                Password Strength
              </Typography>
              <LinearProgress
                variant="determinate"
                value={getPassStrentgh(score)}
                color={
                  score <= 1 ? "error" : score === 2 ? "warning" : "success"
                }
              />
              <Typography variant="subtitle1" color="secondary" align="center">
                {feedback.warning}
              </Typography>
              {feedback.suggestions.length > 1 && (
                <Typography variant="subtitle2" color="secondary">
                  Tip : {feedback.suggestions}
                </Typography>
              )}
            </Box>
          )}
          <TextField
            error={errConfirmPassword.length !== 0}
            margin="normal"
            fullWidth
            required
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            helperText={errConfirmPassword}
          />
          <TextField
            error={errPhoneNo.length !== 0}
            margin="normal"
            required
            fullWidth
            label="Phone Number"
            name="phoneNo"
            value={userData.phoneNo}
            onChange={handleChange}
            helperText={errPhoneNo}
          />
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
          Back
        </Button>
        <Button
          variant="contained"
          onClick={moveNext}
          sx={{ mt: 3, ml: 1 }}
          disabled={isAllFilled()}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default Signup2;

// "account":{
//   "userName":"deepakdk",
//   "email":"deepak@gmail.com",
//   "password":"neasdf1234",
//   "phoneNo":"9876543211"
// },
