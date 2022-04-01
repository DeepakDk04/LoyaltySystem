import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";
import CssBaseline from "@mui/material/CssBaseline";
import purple from "@mui/material/colors/purple";
import pink from "@mui/material/colors/pink";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ConsumerLayout from "./ConsumerLayout";
import Dashboard from "../Pages/Consumer/Dashboard";
import DashboardHome from "../Components/Consumer/DashboardHome";
import ForgetPassword from "../Pages/Common/ForgetPassword";
import Landing from "../Pages/Common/Landing";
import Login from "../Pages/Common/Login";
import Page404 from "../Pages/Common/Page404";
import Profile from "../Components/Consumer/Profile";
import Report from "../Components/Consumer/Report";
import ResetPassword from "../Pages/Common/ResetPassword";
import Signup from "../Pages/Consumer/Signup";
import Support from "../Components/Consumer/Support";
import TransactionHistory from "../Components/Consumer/TransactionHistory";
import VerifyConsumer from "../Pages/Consumer/VerifyConsumer";
import About from "../Pages/Common/About";
import Feautures from "../Pages/Common/Feautures";
import Contact from "../Pages/Common/Contact";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#ff6987",
      light: purple[500],
      dark: pink[500],
      contrastText: "#000",
    },
  },
});

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" index element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/feautures" element={<Feautures />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/consumer" element={<ConsumerLayout />}>
            <Route path="signup" element={<Signup />} />
            <Route path="verify/:token" element={<VerifyConsumer />} />

            <Route path="dashboard" element={<Dashboard />}>
              <Route index element={<DashboardHome />} />
              <Route path="profile" element={<Profile />} />
              <Route path="transactions" element={<TransactionHistory />} />
              <Route path="support" element={<Support />} />
              <Route path="report" element={<Report />} />
            </Route>
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default Home;
