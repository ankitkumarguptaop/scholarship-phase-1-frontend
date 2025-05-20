"use client";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";
import styles from "./button.module.scss";
import { applicantLoginAction } from "@/features/application/application.action";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useAppDispatch } from "@/store/hooks";

const AccessTokenButton = () => {
  const dispatch = useAppDispatch();
  const [accessToken, setAccessToken] = React.useState<string>("");
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  function validateAccessToken() {
    dispatch(applicantLoginAction(accessToken));
  }
  return (
    <>
      <TextField
        id="outlined-access-token"
        label="Access code"
        type={showPassword ? "text" : "password"}
        variant="outlined"
        value={accessToken}
        onChange={(e) => setAccessToken(e.target.value)}
        className={styles["inputAccessToken"]}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleClickShowPassword} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button
        onClick={validateAccessToken}
        variant="contained"
        className={styles["loginButton"]}
      >
        LOG IN
      </Button>
    </>
  );
};

export default AccessTokenButton;
