import React from "react";
import {
  Avatar,
  Button,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import LoginForm from "../../components/LoginForm";
import { LoginPayload } from "../../types/auth";
import { useAppDispatch } from "../../redux/hook/useTypedSeletor";
import { login } from "../../redux/user/userAction";
import { useGoogleLogin } from "@react-oauth/google";
import CustomButton from "../../components/CustomButton.tsx";

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleLoginSubmit = async (payload: LoginPayload) => {
    // dispatch(login(payload));
  };

  const googleLogin = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async (codeResponse) => {
      dispatch(login(codeResponse.code));
      console.log(
        "🚀 ~ file: index.tsx:29 ~ onSuccess: ~ codeResponse.code:",
        codeResponse.code
      );
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

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
          minHeight: "475px",
          gap: 3,
        }}
      >
        <Stack direction={"column"} spacing={2}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            sx={{ gap: 2, pt: 3, pb: 5 }}
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
          <Divider />
          <Box sx={{ width: "100%" }}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                bgcolor: "white",
                color: "#54616C",
                border: "1px solid #54616C",
                fontWeight: "700",

                "&:hover": {
                  bgcolor: "white",
                  border: "1px solid #2287E0",
                  color: "#2287E0",
                },
              }}
              onClick={googleLogin}
            >
              Login with Google
            </Button>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
};

export default LoginPage;
