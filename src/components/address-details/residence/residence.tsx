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
    } else {
      setStates([]);
    }
    setValue("state_of_residence", "");
    setValue("city_of_residence", "");
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedCountry && selectedState) {
      setCities(City.getCitiesOfState(selectedCountry, selectedState));
    } else {
      setCities([]);
    }
    setValue("city_of_residence", "");
  }, [selectedState]);

  return (
    <Box className={styles.contactContainer}>
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

      <Box className={styles.basicDataInputContainer}>
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

      <Box className={styles.contactDataInputContainer}>
        <Box sx={{ width: 455 }}>
          <Controller
            name="country_of_residence"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth error={!!errors.country_of_residence}>
                <InputLabel>Country</InputLabel>
                <Select {...field} value={field.value ?? ""} label="Country">
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
                <InputLabel>State</InputLabel>
                <Select {...field} value={field.value ?? ""} label="State">
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

        <Box sx={{ width: 455 }}>
          <Controller
            name="city_of_residence"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth error={!!errors.city_of_residence}>
                <InputLabel>City</InputLabel>
                <Select {...field} value={field.value ?? ""} label="City">
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
      </Box>

      
     
     
    </Box>
  );
}
