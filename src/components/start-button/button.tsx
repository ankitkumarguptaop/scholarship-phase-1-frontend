"use client";
import { Box, Button } from "@mui/material";
import React from "react";
import styles from "./button.module.scss";
import { redirect } from "next/navigation";

const StartButton = () => {
  function handleStart() {
    redirect("/personal-details")
    // make api call to update status of application
  }
  return (
    <Box className={styles.container}>
      <Button
        className={styles.button}
        variant="contained"
        onClick={handleStart}
      >
        START
      </Button>
    </Box>
  );
};

export default StartButton;
