import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import { useState } from "react";
import bg1 from "../../Images/bg1.jpg";
import CopyRight from "../../Components/CopyRight";
import Signup1 from "../../Components/Consumer/Signup1";
import Signup2 from "../../Components/Consumer/Signup2";
import Signup3 from "../../Components/Consumer/Signup3";

const steps = ["Personal Details", "Account Details", "Review your Account"];

function getStepContent(userData, handleChange, handleNext, handleBack) {
  switch (userData.step) {
    case 0:
      return (
        <Signup1
          userData={userData}
          handleChange={handleChange}
          handleNext={handleNext}
        />
      );
    case 1:
      return (
        <Signup2
          userData={userData}
          handleChange={handleChange}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      );
    case 2:
      return <Signup3 userData={userData} handleBack={handleBack} />;
    default:
      throw new Error("Unknown step");
  }
}

const Signup = () => {
  const theme = useTheme();
  const [userData, setUserData] = useState({
    step: 0,
    firstName: "",
    lastName: "",
    age: 0,
    sex: "",
    bio: "",
    userName: "",
    email: "",
    password: "",
    phoneNo: "",
  });

  const handleNext = () => {
    setUserData((prevData) => ({
      ...prevData,
      step: prevData.step + 1,
    }));
  };

  const handleBack = () => {
    setUserData((prevData) => ({
      ...prevData,
      step: prevData.step - 1,
    }));
  };

  // Handle fields change
  const handleChange = (e) => {
    let value;
    if (e.target.name === "age") {
      value = parseInt(e.target.value) || e.target.value;
    } else {
      value = e.target.value;
    }

    setUserData((prevData) => ({
      ...prevData,
      [e.target.name]: value,
    }));
  };

  const myStyle = {
    backgroundImage: `url(${bg1})`,
    height: "130vh",
    marginTop: "-50px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  return (
    <div style={myStyle}>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }, borderRadius: 5 }}
          elevation={10}
        >
          <Typography component="h1" variant="h4" align="center">
            Register Account
          </Typography>
          <Stepper
            activeStep={userData.step}
            sx={{ pt: 3, ml: { xs: 10, md: 0 } }}
            orientation={
              useMediaQuery(theme.breakpoints.only("xs"))
                ? "vertical"
                : "horizontal"
            }
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {getStepContent(userData, handleChange, handleNext, handleBack)}
        </Paper>
        <CopyRight />
      </Container>
    </div>
  );
};

export default Signup;

/*
http://localhost:5000/api/signup

{
	"account":{
		"userName":"deepakdk",
		"email":"deepak@gmail.com",
		"password":"neasdf1234",
		"phoneNo":"9876543211"
	},
	"profile":{
		"firstName":"newdeepak",
		"lastName":"dk",//nr
		"age":25,
		"sex":"male",
		"bio":"i'm new so cool" //nr
	}
}
*/
