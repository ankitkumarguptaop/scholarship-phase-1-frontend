import { Box, Step, StepLabel, Stepper } from "@mui/material";
import React from "react";

export default function RegistrationStepper() {
  const steps = [
    "Personal",
    "Address",
    "Academic",
    "Labour",
    "Reference",
    "Documents",
  ];

  return (
    <Box  sx={{  width: "126px", height: "850px" }}> 
      <Stepper
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
        activeStep={0}
        orientation="vertical"
      >
        {steps.map((label) => (
          <Step key={label} sx={{ height: "100px" }}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
