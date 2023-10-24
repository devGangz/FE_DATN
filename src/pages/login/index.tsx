import React from "react";
import {
  Avatar,
  Button,
  Container,
  Divider,
  Paper,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { Box } from "@mui/system";
import LoginForm from "../../components/LoginForm";
import { LoginPayload } from "../../types/auth";
import { useAppDispatch } from "../../redux/hook/useTypedSeletor";
import { login } from "../../redux/user/userAction";
import { useGoogleLogin } from "@react-oauth/google";
import { AppColor } from "../../constants/color";

const TypographyText = styled(Typography)({
  fontSize: "100px",
  fontWeight: "700",
  fontFamily: "Darker Grotesque !important",
});

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const googleLogin = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async (codeResponse) => {
      dispatch(login(codeResponse.code));
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
        backgroundColor: AppColor.white,
      }}
    >
      <Container
        maxWidth={"lg"}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
          gap: 4,
        }}
      >
        <img
          style={{ transform: "scale(1.1)" }}
          src="../images/logoSTS.svg"
          alt="logo"
        />
        <Box sx={{ display: "flex" }}>
          <TypographyText>Welcome to&nbsp;</TypographyText>
          <TypographyText color={"rgb(214, 32, 21)"}>STS</TypographyText>
        </Box>
        <Button
          variant="contained"
          onClick={googleLogin}
          sx={{
            zIndex: 1,
            width: "fit-content",
            border: "4px solid rgb(214, 32, 21) ",
            borderRadius: "12px",
            bgcolor: "rgb(252, 233, 232)",
            color: AppColor.black,
            fontSize: "24px",
            fontWeight: "500",
            padding: "8px 40px",
            textTransform: "none",
            "&:hover": {
              bgcolor: "rgba(255, 77, 79, 0.04)",
            },
          }}
        >
          Login in with Google
        </Button>
        <img
          style={{ height: "40%", position: "absolute", bottom: 0 }}
          src="../images/imageLogin.png"
          alt="imageLogin"
        />
      </Container>
    </Box>
  );
};

export default LoginPage;
