import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

import Typography from "@mui/material/Typography";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CopyRight from "../../Components/CopyRight";
import Hero from "../../Images/transfer-money.svg";
import Wave from "../../Images/wave-bg.svg";

const About = () => {
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
                    What are Loyalty Points
                  </Typography>
                  <Typography
                    component="h1"
                    variant="h3"
                    align="center"
                    color="text.primary"
                    gutterBottom
                    sx={{ display: { xs: "inline-block", md: "none" } }}
                  >
                    About Loyalty Points
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
          <img src={Wave} alt="wave" />
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
    </Box>
  );
};

export default About;
