"use client";
import { Box, Button } from "@mui/material";
import React from "react";
import styles from "./button.module.scss";
import { redirect } from "next/navigation";
import { applicationStatusUpdateAction } from "@/features/application/application.action";
import { ScholarshipApplicationStatus } from "@/features/application/application.type";
import { useAppDispatch } from "@/store/hooks";

const StartButton = ({ application_uuid }: { application_uuid: string }) => {
  const dispatch = useAppDispatch();

  async function handleStart() {

    const result = await dispatch(
      applicationStatusUpdateAction({
        application_uuid,
        status: ScholarshipApplicationStatus.inProcess,
      })
    );

    if (applicationStatusUpdateAction.fulfilled.match(result)) {
      redirect("/personal-details");
    } else {
      console.error("Failed to update application status", result);
       
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
