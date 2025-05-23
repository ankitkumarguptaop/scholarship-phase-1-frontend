"use client";
import { sessionData } from "@/libs/irron-session";
import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import styles from "./address.module.scss";
import RegistrationStepper from "../stepper/stepper";
import Contact from "./contact/contsct";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createAddressDetailSchema,
  CreateAddressDetailValidation,
} from "./address-schema";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  createAddressDetailsAction,
  getAddressDetailsAction,
} from "@/features/address-detail/address-details.action";
import Residence from "./residence/residence";

const AddressComponent = ({
  applicantData,
}: {
  applicantData: sessionData;
}) => {
  const dispatch = useAppDispatch();

  const addressDetails = useAppSelector((state) => state.addressDetails.data);

  useEffect(() => {
    if (applicantData?.applicant_uuid) {
      dispatch(getAddressDetailsAction(applicantData?.id));
    }
  }, []);

  const {
    control,
    handleSubmit,
    setValue,
    reset,
    getValues,
    formState: { errors },
    watch,
  } = useForm<CreateAddressDetailValidation>({
    resolver: zodResolver(createAddressDetailSchema),
    defaultValues: addressDetails
      ? {
          ...addressDetails,
        }
      : undefined,
  });

  useEffect(() => {
    if (addressDetails) {
      reset({
        ...addressDetails,
      });
    }
  }, [addressDetails]);

  useEffect(() => {
    const handler = setTimeout(() => {
      const currentData = getValues();

      const isValid = createAddressDetailSchema.safeParse(currentData);
      console.log("✌️isValid --->", isValid);

      if (isValid.success) {
        let payload: any = {
          ...currentData,
          application_id: applicantData?.id,
        };

        dispatch(createAddressDetailsAction(payload));
      }
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [watch(), applicantData?.uuid]);

  const onSubmit = (data: CreateAddressDetailValidation) => {
    const alldata: any = { ...data, application_id: applicantData?.id };
    dispatch(createAddressDetailsAction(alldata));
  };

  const isLoading = useAppSelector((state) => state.personalDetails.getLoading);

  return (
    <Box className={styles.container}>
      <RegistrationStepper />
      <Box className={styles.addressDetailsContainer}>
        <Box className={styles.addressDetailsTitle}>
          <Typography
            sx={{
              fontFamily: "Open Sans",
              fontWeight: 600,
              fontSize: "22px",
              lineHeight: "32px",
              letterSpacing: "0",
              color: "#424242",
              verticalAlign: "middle",
            }}
          >
            Addresses
          </Typography>
        </Box>
          <Contact control={control} errors={errors} />
          <Residence control={control} errors={errors} watch={watch} setValue={setValue}/>
      </Box>
    </Box>
  );
};

export default AddressComponent;
