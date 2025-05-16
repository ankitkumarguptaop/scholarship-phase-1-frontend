"use client";
import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import dayjs, { Dayjs } from "dayjs";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormHelperText,
} from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import styles from "./page.module.scss";
import RegistrationStepper from "@/components/stepper/stepper";
import { useDispatch, useSelector } from "react-redux";
import {
  createPersonalDetailsAction,
  getPersonalDetailsAction,
} from "@/features/personal-detail/personal-details.action";
import { AppDispatch, RootStateType } from "@/store/store";
import { sessionData, SessionData } from "@/libs/irron-session";
import { create } from "node:domain";
import { personalDataSchema } from "@/features/personal-detail/personal-details.type";

// Enum definitions matching backend
enum DocumentType {
  NATIONAL_ID = "National identity card",
  PASSPORT = "Passport",
  FOREIGN_ID = "Foreigner's identity card",
  RUC = "RUC",
  OTHER = "Other",
}

enum MaritalStatus {
  MARRIED = "Married",
  SINGLE = "Single",
  DIVORCED = "Divorced",
  WIDOWED = "Widowed",
  SEPARATED = "Separated",
}

enum FinancialDependency {
  YES = "Yes",
  NO = "No",
}

// Zod schema definition
const personalInfoSchema = z.object({
  document_type: z.nativeEnum(DocumentType, {
    errorMap: () => ({ message: "Please select a document type" }),
  }),
  document_number: z.string().min(1, "Document number is required"),
  marital_status: z.nativeEnum(MaritalStatus, {
    errorMap: () => ({ message: "Please select a marital status" }),
  }),
  profession: z.string().min(1, "Profession is required"),
  date_of_birth: z.any(),

  country: z.string().min(1, "Country is required"),
  province_or_state: z.string().min(1, "Province/State is required"),
  city: z.string().min(1, "City is required"),
  nationality: z.string().min(1, "Nationality is required"),
  monthly_income: z
    .string()
    .min(1, "Monthly income is required")
    .refine(
      (val) => !isNaN(Number(val)) && Number(val) >= 0,
      "Must be a positive number"
    ),
  monthly_expenses: z
    .string()
    .min(1, "Monthly expenses is required")
    .refine(
      (val) => !isNaN(Number(val)) && Number(val) >= 0,
      "Must be a positive number"
    ),
  financial_dependency: z.nativeEnum(FinancialDependency, {
    errorMap: () => ({ message: "Please select yes or no" }),
  }),
  has_children: z.boolean(),
  children_0_4: z
    .number({ required_error: "This field is required" })
    .min(0, "Must be a positive number"),

  children_5_12: z
    .number({ required_error: "This field is required" })
    .min(0, "Must be a positive number"),

  children_13_18: z
    .number({ required_error: "This field is required" })
    .min(0, "Must be a positive number"),

  children_above_18: z
    .number({ required_error: "This field is required" })
    .min(0, "Must be a positive number"),
});

// Type inference from the schema
type PersonalInfoFormData = z.infer<typeof personalInfoSchema>;

const PersonalDetailsRegistration = ({
  applicantData,
}: {
  applicantData: sessionData;
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const personalDetails = useSelector(
    (state: RootStateType) => state.personalDetails.data
  );

  useEffect(() => {
    if (applicantData?.applicant_uuid) {
      dispatch(getPersonalDetailsAction(applicantData?.uuid));
    }
  }, []);

  const {
    control,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
    watch,
  } = useForm<PersonalInfoFormData>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: personalDetails
      ? {
          ...personalDetails,
        }
      : undefined,
  });

  useEffect(() => {
    if (personalDetails) {
      reset({
        ...personalDetails,
        date_of_birth: new Date(personalDetails.date_of_birth),
      });
    }
  }, [personalDetails]);

  useEffect(() => {
    console.log("lkkjndskj");

    const currentData = getValues();

    const isValid = personalInfoSchema.safeParse(currentData);
    console.log("✌️isValid --->", isValid);

    if (isValid.success) {
      const payload: any = {
        ...currentData,
        application_id: applicantData?.uuid,
      };
      dispatch(createPersonalDetailsAction(payload));
    }
  }, [watch(), applicantData?.uuid]);

  const hasChildren = watch("has_children");

  const onSubmit = (data: PersonalInfoFormData) => {
    const alldata: any = { ...data, application_id: applicantData?.uuid };
    dispatch(createPersonalDetailsAction(alldata));
  };

  const handleCancel = () => {
    console.log("Form cancelled");
  };

  return (
    <Box className={styles.container}>
      <RegistrationStepper />
      <Box className={styles.personalDetailsContainer}>
        <Box className={styles.personalDetailsTitle}>
          <Typography
            sx={{
              fontFamily: "Open Sans",
              fontWeight: 600,
              fontSize: "18px",
              lineHeight: "24px",
              letterSpacing: "0",
              color: "#424242",
              verticalAlign: "middle",
            }}
          >
            Personal data
          </Typography>
        </Box>

        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
        <Box className={styles.basicDataContainer}>
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
            1. Basic data
          </Typography>

          <Box className={styles.basicDataInputContainer}>
            <Box sx={{ width: 455, height: 48 }}>
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
                      placeholder="Document Number"
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
                    placeholder="Profession"
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

        <Box className={styles.birthDataContainer}>
          <Typography
            sx={{
              fontFamily: "Open Sans",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: "0",
              verticalAlign: "middle",
              paddingLeft: 1,
              color: "#424242",
            }}
          >
            2. Birth data
          </Typography>

          <Box className={styles.basicDataInputContainer}>
            <Box sx={{ width: 455 }}>
              <Controller
                name="date_of_birth"
                control={control}
                render={({ field }) => (
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker
                      {...field}
                      value={field.value ? dayjs(field.value) : null}
                      label="Date of Birth"
                      enableAccessibleFieldDOMStructure={false}
                      slotProps={{
                        textField: {
                          error: !!errors.date_of_birth,
                          sx: {
                            width: 455,
                            "& .MuiStack-root": {
                              paddingTop: 0,
                            },
                            "& .MuiInputBase-root": {
                              height: 48,
                              alignItems: "center",
                            },
                            "& .MuiInputBase-input": {
                              paddingTop: 0,
                              paddingBottom: 0,
                              paddingLeft: "14px",
                              paddingRight: "14px",
                              height: "100%",
                              boxSizing: "border-box",
                            },
                          },
                        },
                      }}
                    />
                  </DemoContainer>
                )}
              />
            </Box>

            <Box sx={{ width: 455 }}>
              <Controller
                name="country"
                control={control}
                render={({ field }) => (
                  <FormControl fullWidth error={!!errors.country}>
                    <InputLabel id="country-label">Country</InputLabel>
                    <Select
                      {...field}
                      value={field.value ?? ""}
                      labelId="country-label"
                      id="country"
                      className={styles.select}
                      label="Country"
                    >
                      <MenuItem value="USA">United States</MenuItem>
                      <MenuItem value="CAN">Canada</MenuItem>
                      <MenuItem value="MEX">Mexico</MenuItem>
                      {/* Add more countries as needed */}
                    </Select>
                    {errors.country && (
                      <FormHelperText>{errors.country.message}</FormHelperText>
                    )}
                  </FormControl>
                )}
              />
            </Box>
          </Box>

          <Box className={styles.basicDataInputContainer}>
            <Box sx={{ width: 455 }}>
              <Controller
                name="province_or_state"
                control={control}
                render={({ field }) => (
                  <FormControl fullWidth error={!!errors.province_or_state}>
                    <InputLabel id="province-state-label">
                      Province/State
                    </InputLabel>
                    <Select
                      {...field}
                      value={field.value ?? ""}
                      labelId="province-state-label"
                      id="province-state"
                      className={styles.select}
                      label="Province/State"
                    >
                      <MenuItem value="CA">California</MenuItem>
                      <MenuItem value="TX">Texas</MenuItem>
                      <MenuItem value="NY">New York</MenuItem>
                      {/* Add more states as needed */}
                    </Select>
                    {errors.province_or_state && (
                      <FormHelperText>
                        {errors.province_or_state.message}
                      </FormHelperText>
                    )}
                  </FormControl>
                )}
              />
            </Box>

            <Box sx={{ width: 455 }}>
              <Controller
                name="city"
                control={control}
                render={({ field }) => (
                  <FormControl fullWidth error={!!errors.city}>
                    <InputLabel id="city-label">City</InputLabel>
                    <Select
                      {...field}
                      value={field.value ?? ""}
                      labelId="city-label"
                      id="city"
                      className={styles.select}
                      label="City"
                    >
                      <MenuItem value="SF">San Francisco</MenuItem>
                      <MenuItem value="LA">Los Angeles</MenuItem>
                      <MenuItem value="NYC">New York City</MenuItem>
                      {/* Add more cities as needed */}
                    </Select>
                    {errors.city && (
                      <FormHelperText>{errors.city.message}</FormHelperText>
                    )}
                  </FormControl>
                )}
              />
            </Box>
          </Box>

          <Box sx={{ width: 455 }}>
            <Controller
              name="nationality"
              control={control}
              render={({ field }) => (
                <FormControl fullWidth error={!!errors.nationality}>
                  <InputLabel id="nationality-label">Nationality</InputLabel>
                  <Select
                    {...field}
                    value={field.value ?? ""}
                    labelId="nationality-label"
                    id="nationality"
                    className={styles.select}
                    label="Nationality"
                  >
                    <MenuItem value="USA">American</MenuItem>
                    <MenuItem value="CAN">Canadian</MenuItem>
                    <MenuItem value="MEX">Mexican</MenuItem>
                    {/* Add more nationalities as needed */}
                  </Select>
                  {errors.nationality && (
                    <FormHelperText>
                      {errors.nationality.message}
                    </FormHelperText>
                  )}
                </FormControl>
              )}
            />
          </Box>
        </Box>

        <Box className={styles.financialDataContainer}>
          <Typography
            sx={{
              fontFamily: "Open Sans",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: "0",
              verticalAlign: "middle",
              paddingLeft: 1,
              color: "#424242",
            }}
          >
            3. Financial data
          </Typography>

          <Box className={styles.basicDataInputContainer}>
            <Box sx={{ width: 455 }}>
              <Controller
                name="monthly_income"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    value={field.value ?? ""}
                    label="Monthly Income"
                    placeholder="Monthly Income"
                    error={!!errors.monthly_income}
                    helperText={errors.monthly_income?.message}
                    InputProps={{
                      sx: { height: 48 },
                    }}
                    className={styles.select}
                    fullWidth
                  />
                )}
              />
            </Box>

            <Box sx={{ width: 455 }}>
              <Controller
                name="monthly_expenses"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    value={field.value ?? ""}
                    label="Monthly Expense"
                    placeholder="Monthly Expense"
                    error={!!errors.monthly_expenses}
                    helperText={errors.monthly_expenses?.message}
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

        <Box className={styles.financialDependentContainer}>
          <Typography
            sx={{
              fontFamily: "Open Sans",
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "20px",
              letterSpacing: "0",
              verticalAlign: "middle",
              color: "#424242",
            }}
          >
            You are financially dependent on your parents or others:
          </Typography>

          <Box className={styles.financialDependentRadioButto}>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={32}
              height={42}
              width={162}
            >
              <Controller
                name="financial_dependency"
                control={control}
                render={({ field }) => (
                  <FormControl error={!!errors.financial_dependency}>
                    <RadioGroup
                      {...field}
                      value={field.value ?? "No"}
                      row
                      aria-labelledby="financial-dependency-label"
                      name="financial-dependency"
                    >
                      <FormControlLabel
                        value={FinancialDependency.YES}
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value={FinancialDependency.NO}
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                    {errors.financial_dependency && (
                      <FormHelperText>
                        {errors.financial_dependency.message}
                      </FormHelperText>
                    )}
                  </FormControl>
                )}
              />
            </Box>
          </Box>
        </Box>

        <Box className={styles.familyDataContainer}>
          <Typography
            sx={{
              fontFamily: "Open Sans",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: "0",
              verticalAlign: "middle",
              paddingLeft: 1,
              color: "#424242",
            }}
          >
            4. Family data
          </Typography>

          <Box className={styles.hasChildrenContainer}>
            <Typography
              sx={{
                fontFamily: "Open Sans",
                fontWeight: 600,
                fontSize: "14px",
                lineHeight: "20px",
                letterSpacing: "0",
                verticalAlign: "middle",
                paddingLeft: 1,
                color: "#424242",
              }}
            >
              Has children:
            </Typography>

            <Box className={styles.hasChildrenRadioButto}>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={32}
                height={42}
                width={162}
              >
                <Controller
                  name="has_children"
                  control={control}
                  render={({ field: { onChange, value, ...field } }) => (
                    <RadioGroup
                      {...field}
                      row
                      aria-labelledby="has-children-label"
                      name="has-children"
                      value={value ? "Yes" : "No"}
                      onChange={(e) => onChange(e.target.value === "Yes")}
                    >
                      <FormControlLabel
                        value="Yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="No"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  )}
                />
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className={styles.numberOfChildrenContainer}>
          <Typography
            sx={{
              fontFamily: "Open Sans",
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "20px",
              letterSpacing: "0",
              verticalAlign: "middle",
              color: "#424242",
            }}
          >
            Number of children by age:
          </Typography>

          <Box className={styles.numberOfChildrenInputs}>
            <Box sx={{ width: 220 }}>
              <Controller
                name="children_0_4"
                control={control}
                render={({ field }) => (
                  <TextField
                    disabled={!hasChildren}
                    {...field}
                    value={field.value ?? 0}
                    label="0 to 4 years"
                    placeholder="0 to 4 years"
                    type="number"
                    error={!!errors.children_0_4}
                    helperText={errors.children_0_4?.message}
                    InputProps={{
                      sx: {
                        height: 48,
                        width: 220,
                      },
                    }}
                    className={styles.select}
                  />
                )}
              />
            </Box>

            <Box sx={{ width: 220 }}>
              <Controller
                name="children_5_12"
                control={control}
                render={({ field }) => (
                  <TextField
                    disabled={!hasChildren}
                    {...field}
                    value={field.value ?? ""}
                    label="5 to 12 years"
                    placeholder="5 to 12 years"
                    type="number"
                    error={!!errors.children_5_12}
                    helperText={errors.children_5_12?.message}
                    InputProps={{
                      sx: {
                        height: 48,
                        width: 220,
                      },
                    }}
                    className={styles.select}
                  />
                )}
              />
            </Box>

            <Box sx={{ width: 220 }}>
              <Controller
                name="children_13_18"
                control={control}
                render={({ field }) => (
                  <TextField
                    disabled={!hasChildren}
                    {...field}
                    value={field.value ?? ""}
                    label="13 to 18 years"
                    placeholder="13 to 18 years"
                    type="number"
                    error={!!errors.children_13_18}
                    helperText={errors.children_13_18?.message}
                    InputProps={{
                      sx: {
                        height: 48,
                        width: 220,
                      },
                    }}
                    className={styles.select}
                  />
                )}
              />
            </Box>

            <Box sx={{ width: 220 }}>
              <Controller
                name="children_above_18"
                control={control}
                render={({ field }) => (
                  <TextField
                    disabled={!hasChildren}
                    {...field}
                    value={field.value ?? ""}
                    label="+ 18 years"
                    placeholder="+ 18 years"
                    type="number"
                    error={!!errors.children_above_18}
                    helperText={errors.children_above_18?.message}
                    InputProps={{
                      sx: {
                        height: 48,
                        width: 220,
                      },
                    }}
                    className={styles.select}
                  />
                )}
              />
            </Box>
          </Box>
        </Box>

        <Box className={styles.stepperController}>
          <Button className={styles.backButton} type="button">
            BACK
          </Button>
          <Box className={styles.stepperActions}>
            <Button
              className={styles.cancelButton}
              type="button"
              onClick={handleCancel}
            >
              CANCEL
            </Button>
            <Button
              onClick={handleSubmit(onSubmit)}
              className={styles.continueButton}
              type="submit"
            >
              CONTINUE
            </Button>
          </Box>
        </Box>
        {/* </form> */}
      </Box>
    </Box>
  );
};

export default PersonalDetailsRegistration;
