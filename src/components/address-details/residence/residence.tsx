"use client";
import React, { useEffect, useState } from "react";

import { Country, State, City } from "country-state-city";
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
import { Controller } from "react-hook-form";
import styles from "./rsidence.module.scss";
import { HousingConditionsEnum, TypeOfHousingEnum } from "./residence.enum";

export default function Residence({
  control,
  errors,
  watch,
  setValue,
}: {
  control: any;
  errors: any;
  watch: any;
  setValue: any;
}) {
  const selectedCountry = watch("country_of_residence");
  const selectedState = watch("state_of_residence");

  const [countries, setCountries] = useState<any[]>([]);
  const [states, setStates] = useState<any[]>([]);
  const [cities, setCities] = useState<any[]>([]);

  useEffect(() => {
    setCountries(Country.getAllCountries());
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      const country = Country.getCountryByCode(selectedCountry);
      setStates(State.getStatesOfCountry(country?.isoCode));
      setCities([]);
    } else {
      setStates([]);
      setCities([]);
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedCountry && selectedState) {
      setCities(City.getCitiesOfState(selectedCountry, selectedState));
    } else {
      setCities([]);
    }
  }, [selectedState]);


  return (
    <Box className={styles.residenceContainer}>
      <Typography
        sx={{
          fontFamily: "Open Sans",
          fontWeight: 600,
          fontSize: "16px",
          lineHeight: "24px",
          paddingLeft: 1,
          color: "#424242",
        }}
      >
        2. Residence
      </Typography>

      <Box className={styles.housingInputContainer}>
        <Box sx={{ width: 455 }}>
          <Controller
            name="type_of_housing"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth error={!!errors.type_of_housing}>
                <InputLabel id="type-of-housing-label">
                  Type of Housing
                </InputLabel>
                <Select
                  {...field}
                  value={field.value ?? ""}
                  labelId="type-of-housing-label"
                  id="type-of-housing"
                  className={styles.select}
                  label="Type of Housing"
                >
                  {Object.values(TypeOfHousingEnum).map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </Select>
                {errors.type_of_housing && (
                  <FormHelperText>
                    {errors.type_of_housing.message}
                  </FormHelperText>
                )}
              </FormControl>
            )}
          />
        </Box>

        <Box sx={{ width: 455 }}>
          <Controller
            name="housing_condition"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth error={!!errors.housing_condition}>
                <InputLabel id="housing-condition-label">
                  Housing Condition
                </InputLabel>
                <Select
                  {...field}
                  value={field.value ?? ""}
                  labelId="housing-condition-label"
                  id="housing-condition"
                  className={styles.select}
                  label="Housing Condition"
                >
                  {Object.values(HousingConditionsEnum).map((status) => (
                    <MenuItem key={status} value={status}>
                      {status}
                    </MenuItem>
                  ))}
                </Select>
                {errors.housing_condition && (
                  <FormHelperText>
                    {errors.housing_condition.message}
                  </FormHelperText>
                )}
              </FormControl>
            )}
          />
        </Box>
      </Box>

      <Box className={styles.countaryStateInputContainer}>
        <Box sx={{ width: 455 }}>
          <Controller
            name="country_of_residence"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth error={!!errors.country_of_residence}>
                <InputLabel id="country_of_residence">
                  Country of residence
                </InputLabel>
                <Select
                  labelId="country_of_residence"
                  label="Country of residence"
                  {...field}
                  value={field.value ?? ""}
                  className={styles.select}
                >
                  {countries.map((country) => (
                    <MenuItem key={country.isoCode} value={country.isoCode}>
                      {country.name}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>
                  {errors.country_of_residence?.message}
                </FormHelperText>
              </FormControl>
            )}
          />
        </Box>

        <Box sx={{ width: 455 }}>
          <Controller
            name="state_of_residence"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth error={!!errors.state_of_residence}>
                <InputLabel id="state_of_residence">
                  State of residence
                </InputLabel>
                <Select
                  {...field}
                  className={styles.select}
                  value={field.value ?? ""}
                  labelId="state_of_residence"
                  label="State of residence"
                >
                  {states.map((state) => (
                    <MenuItem key={state.isoCode} value={state.isoCode}>
                      {state.name}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>
                  {errors.state_of_residence?.message}
                </FormHelperText>
              </FormControl>
            )}
          />
        </Box>
      </Box>

      <Box className={styles.cityZipInputContainer}>
        <Box sx={{ width: 455 }}>
          <Controller
            name="city_of_residence"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth error={!!errors.city_of_residence}>
                <InputLabel id="city_of_residence">
                  City of residence
                </InputLabel>
                <Select
                  {...field}
                  className={styles.select}
                  value={field.value ?? ""}
                  label="City of residence"
                  labelId="city_of_residence"
                >
                  {cities.map((city) => (
                    <MenuItem key={city.name} value={city.name}>
                      {city.name}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>
                  {errors.city_of_residence?.message}
                </FormHelperText>
              </FormControl>
            )}
          />
        </Box>

        <Box sx={{ width: 455 }}>
          <Controller
            name="zip_code"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                value={field.value ?? ""}
                label="Zip code"
                error={!!errors.zip_code}
                helperText={errors.zip_code?.message}
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
