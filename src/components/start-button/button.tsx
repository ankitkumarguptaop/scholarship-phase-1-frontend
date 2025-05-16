"use client";
import { Box, Button } from "@mui/material";
import React from "react";
import styles from "./button.module.scss";
import { redirect } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { applicationStatusUpdateAction } from "@/features/application/application.action";
import { ScholarshipApplicationStatus } from "@/features/application/application.type";

const StartButton = ({application_uuid}:{application_uuid:string}) => {

  const dispatch=useDispatch<AppDispatch>()


  async function handleStart() {
  const result = await dispatch(
    applicationStatusUpdateAction({
      application_uuid,
      status: ScholarshipApplicationStatus.ONGOING,
    })
  );

  // Optional: check if it's fulfilled
  if (applicationStatusUpdateAction.fulfilled.match(result)) {
    redirect("/personal-details"); // ✅ Proceed on success
  } else {
    console.error("Failed to update application status", result);
    // Optional: Show error to user
  }
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
