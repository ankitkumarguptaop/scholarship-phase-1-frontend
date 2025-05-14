import {
  Box,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import styles from "./access.module.scss";
import Image from "next/image";
import AccessTokenButton from "@/components/access-token-button/button";
const Access = () => {
  return (
    <Box
      className={styles["loginBackground"]}
      sx={{
        backgroundImage: `linear-gradient(90deg, rgba(46, 168, 255, 0) -49.08%, rgba(46, 168, 255, 0.2) 227.37%) ,url(/left-wing.png), url(/right-wing.png)`,
      }}
    >
      <Paper className={styles["loginContainer"]} elevation={1}>
        <Image
          src={`/images/logo-funiber-headquarters-us.png`}
          alt="Headquarter Logo"
          className={styles.logo}
          width={352}
          height={110.2}
        />

        <Box className={styles["loginContent"]}>
          <Stack gap={3} className={styles["loginContent"]}>
            <Stack gap={1}>
              <Typography className={styles["loginTitle"]}>Log in</Typography>
              <Typography className={styles["loginSubtitle"]}>
                Enter the access code to continue
              </Typography>
            </Stack>
            
           <AccessTokenButton/>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
};

export default Access;
