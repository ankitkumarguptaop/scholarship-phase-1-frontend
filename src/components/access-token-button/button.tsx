"use client";
import { Button, TextField } from "@mui/material";
import React from "react";
import styles from "./button.module.scss";
import { useDispatch } from "react-redux";
import { applicantLoginAction } from "@/features/login/login.action";

const AccessTokenButton = () => {

    const dispatch = useDispatch();
    const [accessToken, setAccessToken] = React.useState<string>("");


  function validateAccessToken() {
    // dispatch(applicantLoginAction(accessToken));
    console.log(accessToken);
  }
  return (
    <>
      <TextField
        id="outlined-basic"
        label="Access code"
        variant="outlined"
        onChange={(e) => setAccessToken(e.target.value)}
        className={styles["inputAccessToken"]}
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
