"use client";
import { Box, Button } from "@mui/material";
import React from "react";
import styles from "./button.module.scss";

const StartButton = () => {
  function handleStart() {
    console.log("Start button clicked");
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
