import React from "react";
import { Avatar, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import LoginForm from "../../components/LoginForm";
import { LoginPayload } from "../../types/auth";
import {
  useAppDispatch,
  useAppSelector,
} from "../../redux/hook/useTypedSeletor";
import { login } from "../../redux/user/userAction";

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleLoginSubmit = async (payload: LoginPayload) => {
    dispatch(login(payload));
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#233588",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          mx: "auto",
          padding: "20px 32px 32px 32px",
          maxWidth: "450px",
          textAlign: "center",
          maxHeight: "475px",
        }}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          sx={{ gap: 2, mt: 3, mb: 5 }}
        >
          <Avatar
            sx={{ width: 36, height: 36 }}
            variant="square"
            src="../images/logo.svg"
            alt="logo"
          />
          <Typography component={"h1"} variant="h5" fontWeight={"700"}>
            ĐĂNG NHẬP HỆ THỐNG
          </Typography>
        </Box>
        <Box sx={{ bottom: 0 }}>
          <LoginForm onSubmit={handleLoginSubmit} />
        </Box>
      </Paper>
    </Box>
  );
};

export default LoginPage;
