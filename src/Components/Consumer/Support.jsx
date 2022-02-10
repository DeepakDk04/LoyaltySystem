import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

import supportBg from "../../Images/support_bg.svg";

const Support = () => {
  return (
    <Box>
      <Grid
        container
        direction="row-reverse"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              ml: { xs: 0, md: 12 },
              mt: { xs: 2, md: 0 },
              pt: { xs: 2, md: 0 },
            }}
          >
            <Paper
              sx={{
                my: { xs: 3, md: 6 },
                py: { xs: 2, md: 3 },
                borderRadius: 5,
                maxWidth: { xs: "350px", md: "400px" },
                minWidth: { xs: "340px", md: "400px" },
                color: "white",
                bgcolor: "#7b798a",
                // bgcolor: "rgba(250,82,116,0.8)",
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
                  <Typography variant="h3" gutterBottom align="center">
                    Contact Us
                  </Typography>
                  <Typography
                    variant="h5"
                    gutterBottom
                    align="center"
                    sx={{ display: { xs: "none", md: "inherit" } }}
                  >
                    Write Your Query
                  </Typography>

                  <Typography
                    textAlign="center"
                    variant="subtitle2"
                    gutterBottom
                    sx={{ mt: 2 }}
                  >
                    Don't worry, we are always here to help you!
                  </Typography>

                  <TextField
                    margin="normal"
                    label="Ask Us"
                    name="Support Query"
                    autoFocus
                    multiline
                    rows={2}
                    variant="standard"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle sx={{ color: "white" }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiInputLabel-root": {
                        color: "white",
                      },
                      "& .MuiInput-root": {
                        color: "white",
                        fontSize: "2em",
                        fontWeight: "bold",
                        borderBlockColor: "white",
                      },
                      "& .MuiInput-root:focus": {
                        borderBlockColor: "white",
                      },
                    }}
                  />
                </Box>

                <Button
                  size="large"
                  color="secondary"
                  variant="contained"
                  sx={{
                    mt: 3,
                    boxShadow: 10,
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Paper>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {/* desktop img */}

          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <img
              src={supportBg}
              alt="support illustration"
              height={"600px"}
              width={"600px"}
            />
          </Box>
          {/* mobile img */}

          <Box sx={{ display: { xs: "inline-block", md: "none" } }}>
            <img
              src={supportBg}
              alt="support illustration"
              height={"260px"}
              width={"260px"}
            />
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          position: "fixed",
          top: { xs: "88%", md: "80%" },
          right: { xs: "15%", md: "5%" },
          zIndex: 6,
        }}
      >
        <Tooltip title="Help !" arrow>
          <Badge badgeContent={"Hii"} color="error">
            <Fab color="primary" aria-label="help" size="medium">
              <SupportAgentIcon fontSize="large" />
            </Fab>
          </Badge>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default Support;
