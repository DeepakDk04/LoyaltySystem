import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

import Typography from "@mui/material/Typography";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CopyRight from "../../Components/CopyRight";
import Hero from "../../Images/quality-assurance.svg";

const Feautures = () => {
  return (
    <Box>
      <Box component="main">
        {/* Hero unit */}
        <Box sx={{ flexGrow: 1, mt: 1 }}>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  bgcolor: "background.paper",
                  py: 8,
                }}
              >
                <Container maxWidth="sm">
                  <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                    sx={{ display: { xs: "none", md: "block" } }}
                  >
                    Feautures Of Loyalty Points
                  </Typography>
                  <Typography
                    component="h1"
                    variant="h3"
                    align="center"
                    color="text.primary"
                    gutterBottom
                    sx={{ display: { xs: "inline-block", md: "none" } }}
                  >
                    Feautures Of Loyalty Points
                  </Typography>
                  <Typography
                    variant="h5"
                    align="center"
                    color="text.secondary"
                    paragraph
                  >
                    Create a points-based loyalty program with various earning
                    rules. Reward customers for their purchases, behavior, or
                    specific interactions.
                  </Typography>
                  <Stack
                    sx={{ pt: 4 }}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                  >
                    <Button
                      variant="contained"
                      href="/consumer/signup"
                      endIcon={<KeyboardArrowRightIcon />}
                    >
                      Get Started
                    </Button>
                  </Stack>
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
                animation: "float 3s linear infinite alternate",
                "@keyframes float": {
                  "0%": {
                    transform: "translatey(-6px)",
                  },
                  "50%": {
                    transform: "translatey(6px)",
                  },
                  "100%": {
                    transform: "translatey(0px)",
                  },
                },
              }}
            >
              {/* desktop img */}
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <img
                  src={Hero}
                  alt="hero img"
                  height={"700px"}
                  width={"700px"}
                />
              </Box>
              {/* mobile img */}
              <Box sx={{ display: { xs: "inline-block", md: "none" } }}>
                <img
                  src={Hero}
                  alt="hero img"
                  height={"380px"}
                  width={"380px"}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/* wave */}
        <Box
          sx={{
            animation: "pulse 3s linear infinite alternate",
            "@keyframes pulse": {
              "0%": {
                opacity: 0.6,
                transform: "translatey(-3px)",
              },
              "50%": {
                opacity: 0.8,
                transform: "translatey(3px)",
              },
              "100%": {
                opacity: 1,
                transform: "translatey(0px)",
              },
            },
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#0099ff"
              d="M0,128L40,138.7C80,149,160,171,240,186.7C320,203,400,213,480,208C560,203,640,181,720,170.7C800,160,880,160,960,181.3C1040,203,1120,245,1200,240C1280,235,1360,181,1400,154.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
        </Box>
      </Box>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Designed & Developed - Deepak Dk
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          All Rights Reserved !
        </Typography>
        <CopyRight />
      </Box>
      {/* End footer */}
    </Box>
  );
};

export default Feautures;
