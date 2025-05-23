"use client";
import { sessionData } from "@/libs/irron-session";
import { Box, Button, Typography } from "@mui/material";
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
import { redirect } from "next/navigation";

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
    register,
    formState: { errors },
    watch,
  } = useForm<CreateAddressDetailValidation>({
    resolver: zodResolver(createAddressDetailSchema),
    defaultValues: addressDetails?.content
      ? {
          ...addressDetails?.content,
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
        <Contact
          register={register}
          applicantData={applicantData}
          control={control}
          errors={errors}
        />
        <Residence
          control={control}
          errors={errors}
          watch={watch}
          setValue={setValue}
        />
        <Box className={styles.stepperController}>
          <Button className={styles.backButton} onClick={()=>redirect("/personal-details")} type="button">
            BACK
          </Button>
          <Box className={styles.stepperActions}>
            <Button className={styles.cancelButton} type="button">
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
      </Box>
    </Box>
  );
};

export default AddressComponent;
