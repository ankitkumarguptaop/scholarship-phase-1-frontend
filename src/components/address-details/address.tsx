import { sessionData } from "@/libs/irron-session";
import { Box } from "@mui/material";
import React from "react";
import styles from "./address.module.scss";
import RegistrationStepper from "../stepper/stepper";
const AddressComponent = ({
  applicantData,
}: {
  applicantData: sessionData;
}) => {
  return (
    <Box className={styles.container}>
      <RegistrationStepper />
      <Box className={styles.addressDetailsContainer}>

         
      </Box>
    </Box>
  );
};

export default AddressComponent;
