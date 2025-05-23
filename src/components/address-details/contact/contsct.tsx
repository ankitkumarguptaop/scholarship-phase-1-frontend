"use client";
import { DocumentType, MaritalStatus } from "@/components/personal-details/enums";
import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import styles from "./contact.module.scss";

export default function Contact({ control, errors } : { control: any; errors: any }) {


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

      <Box className={styles.contactDataInputContainer}>
        <Box sx={{ width: 454.5, height: 48 }}>
          <Controller
            name="document_type"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth error={!!errors.document_type}>
                <InputLabel id="document-type-label">
                  Type of document
                </InputLabel>
                <Select
                  {...field}
                  value={field.value ?? ""}
                  labelId="document-type-label"
                  id="document-type"
                  className={styles.select}
                  label="Type of document"
                >
                  {Object.values(DocumentType).map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </Select>
                {errors.document_type && (
                  <FormHelperText>
                    {errors.document_type.message}
                  </FormHelperText>
                )}
              </FormControl>
            )}
          />
        </Box>

        <Box sx={{ width: 455 }}>
          <Controller
            name="document_number"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth error={!!errors.document_number}>
                <TextField
                  {...field}
                  value={field.value ?? ""}
                  label="Document Number"
                  error={!!errors.document_number}
                  helperText={errors.document_number?.message}
                  InputProps={{
                    sx: { height: 48 },
                  }}
                  className={styles.select}
                />
              </FormControl>
            )}
          />
        </Box>
      </Box>

      <Box className={styles.basicDataInputContainer}>
        <Box sx={{ width: 455 }}>
          <Controller
            name="marital_status"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth error={!!errors.marital_status}>
                <InputLabel id="marital-status-label">
                  Marital status
                </InputLabel>
                <Select
                  {...field}
                  value={field.value ?? ""}
                  labelId="marital-status-label"
                  id="marital-status"
                  className={styles.select}
                  label="Marital status"
                >
                  {Object.values(MaritalStatus).map((status) => (
                    <MenuItem key={status} value={status}>
                      {status}
                    </MenuItem>
                  ))}
                </Select>
                {errors.marital_status && (
                  <FormHelperText>
                    {errors.marital_status.message}
                  </FormHelperText>
                )}
              </FormControl>
            )}
          />
        </Box>

        <Box sx={{ width: 455 }}>
          <Controller
            name="profession"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                value={field.value ?? ""}
                label="Profession"
                error={!!errors.profession}
                helperText={errors.profession?.message}
                InputProps={{
                  sx: { height: 48 },
                }}
                className={styles.select}
                fullWidth
              />
            )}
          />
        </Box>
      </Box>
    </Box>
  );
}
