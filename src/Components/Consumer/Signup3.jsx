import Avatar from "@mui/material/Avatar";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CircularProgress from "@mui/material/CircularProgress";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import GppGoodIcon from "@mui/icons-material/GppGood";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PopupAlert from "../PopupAlert";
import { SIGNUP_URL } from "../../Utils/urls";

const Signup3 = ({ userData, handleBack }) => {
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const createAccount = async () => {
    // creating a new consumer account
    let user;
    if (userData.lastName.length > 0 && userData.bio.length > 0) {
      user = {
        account: {
          userName: userData.userName,
          email: userData.email,
          password: userData.password,
          phoneNo: userData.phoneNo,
        },
        profile: {
          firstName: userData.firstName,
          lastName: userData.lastName,
          age: userData.age,
          sex: userData.sex,
          bio: userData.bio,
        },
      };
    } else if (userData.lastName.length > 0 && userData.bio.length === 0) {
      user = {
        account: {
          userName: userData.userName,
          email: userData.email,
          password: userData.password,
          phoneNo: userData.phoneNo,
        },
        profile: {
          firstName: userData.firstName,
          lastName: userData.lastName,
          age: userData.age,
          sex: userData.sex,
        },
      };
    } else if (userData.lastName.length === 0 && userData.bio.length > 0) {
      user = {
        account: {
          userName: userData.userName,
          email: userData.email,
          password: userData.password,
          phoneNo: userData.phoneNo,
        },
        profile: {
          firstName: userData.firstName,
          age: userData.age,
          sex: userData.sex,
          bio: userData.bio,
        },
      };
    } else if (userData.lastName.length === 0 && userData.bio.length === 0) {
      user = {
        account: {
          userName: userData.userName,
          email: userData.email,
          password: userData.password,
          phoneNo: userData.phoneNo,
        },
        profile: {
          firstName: userData.firstName,
          age: userData.age,
          sex: userData.sex,
        },
      };
    }

    console.log("account register for ", user);
    setLoading(true);
    try {
      const { data, status, statusText } = await axios.post(SIGNUP_URL, user);
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
    <Box
      sx={{
        p: 2,
      }}
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
          <GppGoodIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Review Your Details
        </Typography>
        <Box component="div" sx={{ my: 1 }}>
          <TextField
            margin="normal"
            fullWidth
            label="Username"
            defaultValue={userData.userName}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Email"
            defaultValue={userData.email}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Password"
            type="password"
            defaultValue={userData.password}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Phone No"
            defaultValue={userData.phoneNo}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            margin="normal"
            fullWidth
            label="First Name"
            defaultValue={userData.firstName}
            InputProps={{
              readOnly: true,
            }}
          />
          {userData.lastName.length > 0 && (
            <TextField
              margin="normal"
              fullWidth
              label="Last Name"
              defaultValue={userData.lastName}
              InputProps={{
                readOnly: true,
              }}
            />
          )}

          <TextField
            margin="normal"
            fullWidth
            label="Age"
            defaultValue={userData.age}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Sex"
            defaultValue={userData.sex}
            InputProps={{
              readOnly: true,
            }}
          />

          {userData.bio.length > 0 && (
            <TextField
              margin="normal"
              fullWidth
              label="Bio"
              defaultValue={userData.bio}
              InputProps={{
                readOnly: true,
              }}
            />
          )}
          <FormControlLabel
            control={
              <Checkbox
                name="checked"
                color="primary"
                onClick={(e) => setAcceptTerms(!acceptTerms)}
              />
            }
            label="I agree to the terms and conditions"
          />
        </Box>
        <Button
          onClick={handleBack}
          fullWidth
          variant="outlined"
          startIcon={<NavigateBeforeIcon />}
        >
          Back
        </Button>
        <Button
          variant="contained"
          onClick={createAccount}
          fullWidth
          disabled={!acceptTerms}
        >
          Confirm My Details
        </Button>
      </Box>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="primary" />
      </Backdrop>
      <PopupAlert
        message={
          error === '"account.email" must be a valid email'
            ? "Your Email is not accepatable"
            : error
        }
        clearMessage={setError}
        alertType="error"
      />
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}></Box>
    </Box>
  );
};

export default Signup3;
//verify details display
