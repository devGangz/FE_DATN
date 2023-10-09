import { Box, Typography } from "@mui/material";
import { useAppDispatch } from "../../redux/hook/useTypedSeletor";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { logOut } from "../../redux/user/userSlide";

const DiaLogNavbar = () => {
  const dispatch = useAppDispatch();
  const onSuccess = () => {
    dispatch(logOut());
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "16px 14px 14px 14px",
          justifyContent: "flex-start",
        }}
        onClick={onSuccess}
      >
        <Typography
          sx={{ color: "#353657", fontSize: "14px", fontWeight: "500" }}
        >
          Logout
        </Typography>
        <ExitToAppOutlinedIcon sx={{ color: "#353657" }} />
      </Box>
    </Box>
  );
};
export default DiaLogNavbar;
