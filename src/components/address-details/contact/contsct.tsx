"use client";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Controller, useFieldArray } from "react-hook-form";
import styles from "./contact.module.scss";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { sessionData } from "@/libs/irron-session";
import CustomModal from "@/components/email-delete-modal/modal";
import { PhoneNumberTypeEnum } from "@/features/address-detail/address-details.type";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import ChoosePhoneTypeModal from "@/components/choose-phone-modal/modal";

export default function Contact({
  control,
  errors,
  applicantData,
  register,
}: {
  control: any;
  errors: any;
  register: any;
  applicantData: sessionData;
}) {
  const {
    fields: emailFeilds,
    append: appendEmail,
    remove: removeEmail,
  } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormProvider)
    name: "emails", // unique name for your Field Array
  });

  const {
    fields: phoneFeids,
    append: appendPhone,
    remove: removePhone,
  } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormProvider)
    name: "phone_numbers", // unique name for your Field Array
  });

  const [open, setOpen] = React.useState(false);
  const [openPhoneModal, setPhoneModal] = React.useState(false);
  const [index, setDeleteIndex] = React.useState<number>();

  function handleDelete() {
    removeEmail(index);
  }
  return (
    <Box className={styles.contactContainer}>
      <Typography
        sx={{
          fontFamily: "Open Sans",
          fontWeight: 600,
          fontSize: "16px",
          lineHeight: "24px",
          letterSpacing: "0",
          verticalAlign: "middle",
          width: 925,
          height: 24,
          paddingLeft: 1,
          color: "#424242",
        }}
      >
        1. Contact
      </Typography>

      <Box className={styles.contactInputContainer}>
        <Box className={styles.emailContainer}>
          <Box className={styles.addEmails}>
            <Typography
              sx={{
                fontFamily: "Open Sans",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "0",
                color: "#424242",
                verticalAlign: "middle",
              }}
            >
              Email
            </Typography>
            <Box>
              <Button
                className={styles.addEmailButton}
                startIcon={<AddIcon />}
                onClick={() => {
                  emailFeilds.length < 5 &&
                    appendEmail({
                      email: "",
                    });
                }}
              >
                ADD Email
              </Button>
            </Box>
          </Box>

          <FormControl fullWidth>
            <TextField
              sx={{ backgroundColor: "#FFFFFF" }}
              type="email"
              placeholder=" abcd@gmail.com"
              value={applicantData?.applicant.email ?? ""}
              InputProps={{
                sx: { height: 48 },
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineIcon />
                  </InputAdornment>
                ),
              }}
              className={styles.select}
            />
          </FormControl>

          {emailFeilds.map((feild, index) => {
            console.log("✌️feild --->", feild);
            return (
              <TextField
                {...register(`emails.${index}.email`)}
                key={feild.id}
                placeholder=" abcd@gmail.com"
                error={!!errors.document_number}
                helperText={errors.document_number?.message}
                InputProps={{
                  sx: { height: 48 },
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailOutlineIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        sx={{ color: "black", borderLeft: "1px solid #E0E0E0" }}
                        onClick={() => {
                          setOpen(true);
                          setDeleteIndex(index);
                        }}
                      >
                        <DeleteIcon />
                      </Button>
                    </InputAdornment>
                  ),
                }}
                className={styles.select}
              />
            );
          })}
        </Box>

        <Box className={styles.phoneContainer}>
          <Box className={styles.addPhones}>
            <Typography
              sx={{
                fontFamily: "Open Sans",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "0",
                color: "#424242",
                verticalAlign: "middle",
              }}
            >
              Phone number
            </Typography>
            <Box>
              <Button
                className={styles.addPhoneButton}
                startIcon={<AddIcon />}
                onClick={() => {
                  setPhoneModal(true);
                }}
              >
                ADD PHONE NUMBER
              </Button>
            </Box>
          </Box>

          {phoneFeids.map((feild, index) => {
            return (
              <TextField
                {...register(`phone_numbers.${index}.number`)}
                key={feild.id}
                placeholder={""}
                InputProps={{
                  sx: { height: 48 },
                  startAdornment: (
                    <InputAdornment position="start">
                      { feild.type === "WhatsApp" ? (
                        <WhatsAppIcon />
                      ) : (
                        <PhoneAndroidIcon />
                      )}
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        sx={{ color: "black", borderLeft: "1px solid #E0E0E0" }}
                        onClick={() => {
                          removePhone(index);
                        }}
                      >
                        <DeleteIcon />
                      </Button>
                    </InputAdornment>
                  ),
                }}
                className={styles.select}
              />
            );
          })}
        </Box>
      </Box>

      <CustomModal
        open={open}
        setOpen={setOpen}
        title="Delete email"
        description="Are you sure you want to Remove Email Address?"
        submit={handleDelete}
      />

      <ChoosePhoneTypeModal
        setPhoneModal={setPhoneModal}
        openPhoneModal={openPhoneModal}
        title={"Add Number"}
        appendPhone={appendPhone}
        phoneFeids={phoneFeids}
      />
    </Box>
  );
}
