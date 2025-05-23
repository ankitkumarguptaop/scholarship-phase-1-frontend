import { Box, Container, Paper } from "@mui/material";
import React from "react";
import Navbar from "@/components/navbar/navbar";
import styles from "./layout.module.scss";

const WelcomeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  return (<>
    <Navbar></Navbar>
    <Box className={styles["welcomeBackground"]}>
      <Container>
        <Paper elevation={0} className={styles["layoutSubContainer"]}>
          
          {children}
        </Paper>
       </Container>
    </Box>
    </>
  );
};

export default WelcomeLayout;
