"use client";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";
import styles from "./button.module.scss";
import { useDispatch } from "react-redux";
import { applicantLoginAction } from "@/features/application/application.action";
import { AppDispatch } from "@/store/store";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const AccessTokenButton = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [accessToken, setAccessToken] = React.useState<string>("");
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleMouseDownPassword = (event: React.MouseEvent) => {
    event.preventDefault();
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
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
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
