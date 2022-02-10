import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Pagination from "@mui/material/Pagination";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InfoIcon from "@mui/icons-material/Info";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PersonIcon from "@mui/icons-material/Person";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

import { useState } from "react";
import LastSeen from "../../Utils/lastSeen";

const data = [
  {
    vendor: "82042949242394432",
    type: "Credit",
    amount: 100,
    points: 1,
    date: new Date(),
  },
  {
    vendor: "82042949242394432",
    type: "Redeem",
    amount: 10,
    points: 2,
    date: new Date(),
  },
  {
    vendor: "82042949242394432",
    type: "Credit",
    amount: 600,
    points: 7,
    date: new Date(),
  },
  {
    vendor: "82042949242394432",
    type: "Redeem",
    amount: 1110,
    points: 22,
    date: new Date(),
  },
  {
    vendor: "82042949242394432",
    type: "Credit",
    amount: 300,
    points: 2,
    date: new Date(),
  },
];

const TransactionHistory = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const moreIconOpen = Boolean(anchorEl);

  const moreIconHandleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const moreIconHandleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ mt: { xs: 2, md: 3 } }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={3}
      >
        {data.map((cardItem, index) => (
          <Grid item xs={12} md={3} key={index}>
            <Card
              sx={{
                maxWidth: 345,
                bgcolor: "#ff6987",
                borderRadius: 5,
                boxShadow: 14,
              }}
            >
              <CardHeader
                sx={{
                  color: "white",
                  "& .MuiCardHeader-subheader": {
                    color: "white",
                  },
                }}
                avatar={
                  <Tooltip
                    title={
                      cardItem.type.slice(0, 1) === "C" ? "Credit" : "Debit"
                    }
                  >
                    <Avatar
                      sx={{
                        bgcolor:
                          cardItem.type.slice(0, 1) === "C"
                            ? "#19d29e"
                            : "#f31184",
                      }}
                      aria-label="recipe"
                    >
                      {cardItem.type.slice(0, 1)}
                    </Avatar>
                  </Tooltip>
                }
                action={
                  <IconButton
                    aria-label="settings"
                    onClick={moreIconHandleClick}
                  >
                    <MoreVertIcon sx={{ color: "white" }} />
                  </IconButton>
                }
                title={`${cardItem.vendor}`}
                subheader={<LastSeen date={cardItem.date} />}
              />

              <Menu
                id="more icon for transaction"
                anchorEl={anchorEl}
                open={moreIconOpen}
                onClose={moreIconHandleClose}
                MenuListProps={{
                  "aria-labelledby": "more icon for transaction ",
                }}
              >
                <MenuItem onClick={moreIconHandleClose}>
                  <ListItemIcon sx={{ color: "#7900FF" }}>
                    <InfoIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Details</ListItemText>
                </MenuItem>
                <MenuItem onClick={moreIconHandleClose}>
                  <ListItemIcon sx={{ color: "#7900FF" }}>
                    <PersonIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Vendor</ListItemText>
                </MenuItem>
                <MenuItem onClick={moreIconHandleClose}>
                  <ListItemIcon sx={{ color: "#7900FF" }}>
                    <SupportAgentIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Support</ListItemText>
                </MenuItem>
              </Menu>

              <CardContent>
                <Typography variant="body2" sx={{ color: "white" }}>
                  Amount Spent : {cardItem.amount}
                </Typography>
                <Typography variant="body2" sx={{ color: "white" }}>
                  Points : {cardItem.points}
                </Typography>
              </CardContent>
              <CardActions
                disableSpacing
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon sx={{ color: "white" }} />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 10,
        }}
      >
        <Pagination
          count={5}
          color="secondary"
          size="large"
          sx={{
            "& .MuiPaginationItem-text:focus": {
              color: "white",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default TransactionHistory;
