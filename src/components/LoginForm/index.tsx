"use client";

import { Box } from "@mui/system";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../InputField";
import { LoginPayload } from "../../types/auth";
import { Link } from "react-router-dom";

interface LoginFormProps {
  onSubmit?: (payload: LoginPayload) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Vui lòng điền vào trường này.")
      .min(4, "Username is required to have at least 4 character"),

    password: yup
      .string()
      .required("Vui lòng nhập mật khẩu.")
      .min(6, "Password is required to have at least 6 character"),
  });

  const [showPassword, setShowPassword] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginPayload>({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const handleLoginSubmit = async (payload: LoginPayload) => {
    await onSubmit?.(payload);
  };

  return (
    <Stack
      spacing={3}
      component={"form"}
      onSubmit={handleSubmit(handleLoginSubmit)}
    >
      <InputField name="username" label="Username" control={control} />
      <InputField
        type={showPassword ? "text" : "password"}
        name="password"
        label="Password"
        control={control}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword((show) => !show)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Ghi nhớ đăng nhập"
        />

        <Typography component={"h1"} variant="body2" fontWeight={"700"}>
          <Link to={"#"}>Quên mật khẩu ?</Link>
        </Typography>
      </Stack>

      <Button
        disabled={isSubmitting}
        startIcon={
          isSubmitting ? (
            <CircularProgress color="inherit" size={"1em"} />
          ) : null
        }
        type="submit"
        variant="contained"
        fullWidth
        sx={{ mt: 3 }}
      >
        Login
      </Button>
    </Stack>
  );
};

export default LoginForm;
