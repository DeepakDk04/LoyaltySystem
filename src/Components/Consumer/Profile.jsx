import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import Typography from "@mui/material/Typography";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import CakeIcon from "@mui/icons-material/Cake";
import EditIcon from "@mui/icons-material/Edit";
import FemaleIcon from "@mui/icons-material/Female";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import HistoryIcon from "@mui/icons-material/History";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MaleIcon from "@mui/icons-material/Male";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import ShareIcon from "@mui/icons-material/Share";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";

import useLocalStorage from "../../Hooks/useLocalStorage";
import LastSeen from "../../Utils/lastSeen";

/*
Data to display

{
    "_id": "61ed7f4f117de20f869e0f8e",
    "userType": "consumer",
    "userName": "DeepakDk123",
    "email": "deepak99pmk@gmail.com",
    "phoneNo": "9488320328",
    "profile": {
        "_id": "61ed7f4e117de20f869e0f8c",
        "meta": {
            "firstName": "Deepak",
            "lastName": "S",
            "age": 22,
            "sex": "male",
            "bio": "Feesgsgfs",
            "crown": "basic",
            "status": "registered",
            "lastActive": "2022-01-23T16:12:23.214Z"
        },
        "verify": {
            "emailCode": "xxlRvyFQi6owhunNfXpTt",
            "verifiedEmail": false,
            "verifiedPhone": false
        },
        "wallet": {
            "points": 0,
            "latestTransactions": []
        },
        "__v": 0
    },
    "onModel": "Consumer",
    "__v": 0

}
*/

const Profile = () => {
  // Similar to useState but first arg is key to the value in local storage.
  const [user, setUser] = useLocalStorage("user", {});
  const { userName, email, phoneNo, profile } = user;
  const { meta } = profile;

  const { firstName, lastName, age, sex, bio, crown, lastActive } = meta;
  return (
    <Box>
      <Paper
        sx={{
          my: { xs: 3, md: 6 },
          mx: "auto",
          p: { xs: 2, md: 3 },
          borderRadius: 5,
          maxWidth: { xs: "330px", md: "500px" },
          background:
            "linear-gradient(45deg, rgba(250,82,116,1) 0%, rgba(245,118,236,0.981127485173757) 100%)",
        }}
        elevation={20}
      >
        <Box
          sx={{
            height: "50px",
          }}
        >
          <Box sx={{ position: "absolute", ml: { xs: 35, md: 55 } }}>
            <Chip
              label={crown}
              variant="outlined"
              sx={{
                bgcolor: "#7900FF",
                color: "white",
              }}
            />
          </Box>
          <Typography
            component="h1"
            variant="subtitle"
            align="center"
            color="white"
          >
            {userName}
          </Typography>
          <Typography
            component="h1"
            variant="subtitle1"
            align="center"
            color="white"
          >
            {firstName} {lastName || ""}
          </Typography>
        </Box>
        <Divider>
          <Avatar
            sx={{
              m: 3,
              width: 60,
              height: 60,
              boxShadow: 20,
            }}
            alt={`${firstName} Avatar`}
            src={`https://avatars.dicebear.com/api/gridy/${firstName}.svg`}
          />
        </Divider>
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  gap: 3,
                  color: "white",
                }}
              >
                <BubbleChartIcon /> {bio}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  gap: 3,
                  color: "white",
                }}
              >
                <MarkEmailUnreadIcon /> {email}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  gap: 3,
                  color: "white",
                }}
              >
                <LocalPhoneIcon /> {phoneNo}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  gap: 3,
                  color: "white",
                }}
              >
                <CakeIcon /> {age} Years Old
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  gap: 3,
                  color: "white",
                }}
              >
                {sex === "male" ? (
                  <>
                    <MaleIcon /> Male
                  </>
                ) : (
                  <>
                    {" "}
                    <FemaleIcon /> Female
                  </>
                )}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  gap: 3,
                  color: "white",
                }}
              >
                <HistoryIcon /> Last Active{" "}
                <LastSeen date={new Date(lastActive)} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
      <Box
        sx={{
          position: "fixed",
          top: { xs: "95%", md: "90%" },
          right: { xs: "10%", md: "5%" },
          zIndex: 6,
        }}
      >
        <SpeedDial
          ariaLabel="More Actions"
          sx={{ position: "absolute", bottom: 16, right: 16 }}
          icon={<SpeedDialIcon />}
        >
          <SpeedDialAction
            icon={<FileCopyIcon />}
            tooltipTitle={"Copy"}
            color="secondary"
          />
          <SpeedDialAction icon={<ShareIcon />} tooltipTitle={"Share"} />
          <SpeedDialAction icon={<EditIcon />} tooltipTitle={"Edit"} />
        </SpeedDial>
      </Box>
    </Box>
  );
};

export default Profile;
