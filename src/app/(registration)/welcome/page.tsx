import { Box, Button, Typography } from "@mui/material";
import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import WelcomeImage from "@/assets/svg/welcome-poster.svg";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import FolderSharedOutlinedIcon from "@mui/icons-material/FolderSharedOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import StartButton from "@/components/start-button/button";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/libs/irron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export default async function WelcomePage() {
  const session = await getIronSession<SessionData>(
    await cookies(),
    sessionOptions
  );

  if(!session.applicantData?.applicant_uuid){
    redirect("/login")
  }

  return (
    <Box className={styles.container}>
      <Box className={styles.imageContainer}>
        <Image
          alt="Welcome Image"
          height={420}
          width={420}
          src={WelcomeImage}
        ></Image>
      </Box>

      <Box className={styles.welcomeContent} gap={4}>
        <Box className={styles.welcomeTextContainer} gap={2}>
          <Typography className={styles.welcomeTitle}>
            ¡Hi, John Doe!
          </Typography>
          <Typography className={styles.welcomeSubtitle}>
            Welcome to the online scholarship application form
          </Typography>
        </Box>
        <Box className={styles.descriptionContainer} gap={3}>
          <Typography className={styles.welcomeDescription}>
            By filling out this form you will begin the application process for
            our international scholarship program for undergraduate or graduate
            studies.
          </Typography>
          <Typography className={styles.WelcomeDescription}>
            In order to start the process you must enter the corresponding data:
          </Typography>

          <Box className={styles.cardContainer} gap={4}>
            <Box className={styles.card}>
              <Box className={styles.iconBox}>
                <Box className={styles.icon}>
                  <PersonOutlineOutlinedIcon />
                </Box>
              </Box>
              <Typography className={styles.cardText}>Personal</Typography>
            </Box>
            <Box className={styles.card}>
              <Box className={styles.iconBox}>
                <Box className={styles.icon}>
                  <SchoolOutlinedIcon />
                </Box>
              </Box>
              <Typography className={styles.cardText}>Academic</Typography>
            </Box>
            <Box className={styles.card}>
              <Box className={styles.iconBox}>
                <Box className={styles.icon}>
                  <BusinessCenterOutlinedIcon />
                </Box>
              </Box>
              <Typography className={styles.cardText}>Labor</Typography>
            </Box>
            <Box className={styles.card}>
              <Box className={styles.iconBox}>
                <Box className={styles.icon}>
                  <FolderSharedOutlinedIcon />
                </Box>
              </Box>
              <Typography className={styles.cardText}>References</Typography>
            </Box>
            <Box className={styles.card}>
              <Box className={styles.iconBox}>
                <Box className={styles.icon}>
                  <DescriptionOutlinedIcon />
                </Box>
              </Box>
              <Typography className={styles.cardText}>Documents</Typography>
            </Box>
          </Box>
          <Typography className={styles.welcomeDescription}>
            Once the requested information has been entered and sent, our
            advisors will contact you. Our selection process for FUNIBER
            scholarship applicants takes between 5 to 10 working days. If you
            have any doubts or questions, please contact your commercial
            advisor.
          </Typography>
        </Box>
        <StartButton application_uuid={session?.applicantData?.uuid} />
      </Box>
    </Box>
  );
}
