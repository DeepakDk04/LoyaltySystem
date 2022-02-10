import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import tree from "../../Images/notFound.svg";

const Page404 = () => {
  return (
    <Box
      sx={{
        mt: -3,
        minHeight: "102vh",
        backgroundColor: "#e5e5f7",
        opacity: 0.8,
        backgroundImage:
          "radial-gradient(#444cf7 0.5px, transparent 0.5px), radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px)",
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0, 10px 10px",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid item xs={12} md={6}>
          <Box sx={{ py: 8 }}>
            <Container
              component="main"
              maxWidth="xs"
              sx={{ mt: { xs: 3 }, pt: { xs: 3 } }}
            >
              <Paper
                sx={{
                  my: { xs: 3, md: 6 },
                  py: { xs: 2, md: 3 },
                  borderRadius: 5,
                }}
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
                  <Box>
                    <Typography
                      variant="h1"
                      gutterBottom
                      align="center"
                      color="primary"
                    >
                      404
                    </Typography>
                    <Typography
                      variant="h5"
                      gutterBottom
                      align="center"
                      sx={{ color: "#ff6584" }}
                    >
                      OOPS! Page Not Found
                    </Typography>
                    <Box component="div" sx={{ mt: 2 }}>
                      <Typography
                        textAlign="center"
                        variant="subtitle2"
                        gutterBottom
                      >
                        The Page that you are trying to visit not found.
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "center", mt: 3 }}
                  >
                    <Button
                      href="/"
                      size="small"
                      sx={{ bgcolor: "#ff6584", color: "black" }}
                      variant="outlined"
                    >
                      Go To Home Page
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </Container>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <img src={tree} alt="hero img" height={"600px"} width={"600px"} />
          </Box>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <img src={tree} alt="hero img" height={"350px"} width={"350px"} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Page404;
