// "use client";
// import RegistrationStepper from "@/components/stepper/stepper";
// import {
//   Box,
//   Button,
//   FormControl,
//   FormControlLabel,
//   InputLabel,
//   MenuItem,
//   Radio,
//   RadioGroup,
//   Select,
//   styled,
//   TextField,
//   Typography,
// } from "@mui/material";
// import React, { useEffect } from "react";
// import styles from "./page.module.scss";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { getPersonalDetailsAction } from "@/features/personal-detail/personal-details.action";
// import { useDispatch } from "react-redux";

// const PersonalDetailsRegistration = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     // dispatch(getPersonalDetailsAction("10840177-2650-4117-9c64-867d722825a9"));
//   }, []);

//   return (
//     <Box className={styles.container}>
//       <RegistrationStepper />
//       <Box className={styles.personalDetailsContainer}>
//         <Box className={styles.personalDetailsTitle}>
//           <Typography
//             sx={{
//               fontFamily: "Open Sans",
//               fontWeight: 600,
//               fontSize: "18px",
//               lineHeight: "24px",
//               letterSpacing: "0",
//               color: "#424242",
//               verticalAlign: "middle",
//             }}
//           >
//             Personal data
//           </Typography>
//         </Box>
//         <Box className={styles.basicDataContainer}>
//           <Typography
//             sx={{
//               fontFamily: "Open Sans",
//               fontWeight: 600,
//               fontSize: "16px",
//               lineHeight: "24px",
//               letterSpacing: "0",
//               verticalAlign: "middle",
//               width: 925,
//               height: 24,
//               paddingLeft: 1,
//               color: "#424242",
//             }}
//           >
//             1. Basic data
//           </Typography>
//           <Box className={styles.basicDataInputContainer}>
//             <Box sx={{ width: 455, height: 48 }}>
//               <FormControl fullWidth>
//                 <InputLabel id="demo-simple-select-label">
//                   Type of document
//                 </InputLabel>
//                 <Select
//                   labelId="demo-simple-select-label"
//                   id="demo-simple-select"
//                   className={styles.select}
//                   value={""}
//                   label="Type of document"
//                 >
//                   <MenuItem value={10}>Ten</MenuItem>
//                   <MenuItem value={20}>Twenty</MenuItem>
//                   <MenuItem value={30}>Thirty</MenuItem>
//                 </Select>
//               </FormControl>
//             </Box>
//             <Box sx={{ width: 455 }}>
//               <FormControl fullWidth>
//                 <InputLabel id="demo-simple-select-label">
//                   Document Number
//                 </InputLabel>
//                 <Select
//                   labelId="demo-simple-select-label"
//                   id="demo-simple-select"
//                   value={""}
//                   label="Document Number"
//                   className={styles.select}
//                   // onChange={handleChange}
//                 >
//                   <MenuItem value={10}>Ten</MenuItem>
//                   <MenuItem value={20}>Twenty</MenuItem>
//                   <MenuItem value={30}>Thirty</MenuItem>
//                 </Select>
//               </FormControl>
//             </Box>
//           </Box>
//           <Box className={styles.basicDataInputContainer}>
//             <Box sx={{ width: 455 }}>
//               <FormControl fullWidth>
//                 <InputLabel id="demo-simple-select-label">
//                   Marital status
//                 </InputLabel>
//                 <Select
//                   labelId="demo-simple-select-label"
//                   id="demo-simple-select"
//                   className={styles.select}
//                   value={""}
//                   label="Marital status"
//                 >
//                   <MenuItem value={10}>Ten</MenuItem>
//                   <MenuItem value={20}>Twenty</MenuItem>
//                   <MenuItem value={30}>Thirty</MenuItem>
//                 </Select>
//               </FormControl>
//             </Box>
//             <Box sx={{ width: 455 }}>
//               <TextField
//                 placeholder="Profession"
//                 InputProps={{
//                   sx: {
//                     height: 48,
//                   },
//                 }}
//                 className={styles.select}
//               ></TextField>
//             </Box>
//           </Box>
//         </Box>

//         <Box className={styles.birthDataContainer}>
//           <Typography
//             sx={{
//               fontFamily: "Open Sans",
//               fontWeight: 600,
//               fontSize: "16px",
//               lineHeight: "24px",
//               letterSpacing: "0",
//               verticalAlign: "middle",
//               paddingLeft: 1,
//               color: "#424242",
//             }}
//           >
//             2. Birth data
//           </Typography>
//           <Box className={styles.basicDataInputContainer}>
//             <Box sx={{ width: 455 }}>
//               <DemoContainer components={["DatePicker"]}>
//                 <DatePicker
//                   enableAccessibleFieldDOMStructure={false}
//                   label="Date of Birth"
//                   slotProps={{
//                     textField: {
//                       sx: {
//                         width: 455,
//                         "& .MuiStack-root": {
//                           paddingTop: 0,
//                         },
//                         "& .MuiInputBase-root": {
//                           height: 48,
//                           alignItems: "center",
//                         },
//                         "& .MuiInputBase-input": {
//                           paddingTop: 0,
//                           paddingBottom: 0,
//                           paddingLeft: "14px",
//                           paddingRight: "14px",
//                           height: "100%",
//                           boxSizing: "border-box",
//                         },
//                       },
//                     },
//                   }}
//                 />
//               </DemoContainer>
//             </Box>
//             <Box sx={{ width: 455 }}>
//               <FormControl fullWidth>
//                 <InputLabel id="demo-simple-select-label">Country</InputLabel>
//                 <Select
//                   labelId="demo-simple-select-label"
//                   id="demo-simple-select"
//                   value={""}
//                   label="Country"
//                   className={styles.select}
//                   // onChange={handleChange}
//                 >
//                   <MenuItem value={10}>Ten</MenuItem>
//                   <MenuItem value={20}>Twenty</MenuItem>
//                   <MenuItem value={30}>Thirty</MenuItem>
//                 </Select>
//               </FormControl>
//             </Box>
//           </Box>
//           <Box className={styles.basicDataInputContainer}>
//             <Box sx={{ width: 455 }}>
//               <FormControl fullWidth>
//                 <InputLabel id="demo-simple-select-label">
//                   Province/State
//                 </InputLabel>
//                 <Select
//                   labelId="demo-simple-select-label"
//                   id="demo-simple-select"
//                   className={styles.select}
//                   value={""}
//                   label="Province/State"
//                 >
//                   <MenuItem value={10}>Ten</MenuItem>
//                   <MenuItem value={20}>Twenty</MenuItem>
//                   <MenuItem value={30}>Thirty</MenuItem>
//                 </Select>
//               </FormControl>
//             </Box>
//             <Box sx={{ width: 455 }}>
//               <FormControl fullWidth>
//                 <InputLabel id="demo-simple-select-label">City</InputLabel>
//                 <Select
//                   labelId="demo-simple-select-label"
//                   id="demo-simple-select"
//                   className={styles.select}
//                   value={""}
//                   label="City"
//                   // sx={{
//                   //   height: 48,
//                   // }}
//                   // onChange={handleChange}
//                 >
//                   <MenuItem value={10}>Ten</MenuItem>
//                   <MenuItem value={20}>Twenty</MenuItem>
//                   <MenuItem value={30}>Thirty</MenuItem>
//                 </Select>
//               </FormControl>
//             </Box>
//           </Box>
//           <Box sx={{ width: 455 }}>
//             <FormControl fullWidth>
//               <InputLabel id="demo-simple-select-label">Nationality</InputLabel>
//               <Select
//                 labelId="demo-simple-select-label"
//                 id="demo-simple-select"
//                 className={styles.select}
//                 value={""}
//                 label="Nationality"
//                 // sx={{
//                 //   height: 48,
//                 // }}
//                 // onChange={handleChange}
//               >
//                 <MenuItem value={10}>Ten</MenuItem>
//                 <MenuItem value={20}>Twenty</MenuItem>
//                 <MenuItem value={30}>Thirty</MenuItem>
//               </Select>
//             </FormControl>
//           </Box>
//         </Box>
//         <Box className={styles.financialDataContainer}>
//           <Typography
//             sx={{
//               fontFamily: "Open Sans",
//               fontWeight: 600,
//               fontSize: "16px",
//               lineHeight: "24px",
//               letterSpacing: "0",
//               verticalAlign: "middle",
//               paddingLeft: 1,
//               color: "#424242",
//             }}
//           >
//             3. Financial data
//           </Typography>

//           <Box className={styles.basicDataInputContainer}>
//             <Box sx={{ width: 455 }}>
//               <TextField
//                 placeholder="Monthly Income"
//                 InputProps={{
//                   sx: {
//                     height: 48,
//                   },
//                 }}
//                 className={styles.select}
//               ></TextField>
//             </Box>
//             <Box sx={{ width: 455 }}>
//               <TextField
//                 placeholder="Monthly Expense"
//                 InputProps={{
//                   sx: {
//                     height: 48,
//                   },
//                 }}
//                 className={styles.select}
//               ></TextField>
//             </Box>
//           </Box>
//         </Box>
//         <Box className={styles.financialDependentContainer}>
//           <Typography
//             sx={{
//               fontFamily: "Open Sans",
//               fontWeight: 600,
//               fontSize: "14px",
//               lineHeight: "20px",
//               letterSpacing: "0",
//               verticalAlign: "middle",
//               color: "#424242",
//             }}
//           >
//             You are financially dependent on your parents or others:
//           </Typography>
//           <Box className={styles.financialDependentRadioButto}>
//             <Box
//               display={"flex"}
//               alignItems={"center"}
//               justifyContent={"center"}
//               gap={32}
//               height={42}
//               width={162}
//             >
//               <RadioGroup
//                 row
//                 aria-labelledby="demo-radio-buttons-group-label"
//                 defaultValue="No"
//                 name="radio-buttons-group"
//               >
//                 <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
//                 <FormControlLabel value="No" control={<Radio />} label="No" />
//               </RadioGroup>
//             </Box>
//           </Box>
//         </Box>
//         <Box className={styles.familyDataContainer}>
//           <Typography
//             sx={{
//               fontFamily: "Open Sans",
//               fontWeight: 600,
//               fontSize: "16px",
//               lineHeight: "24px",
//               letterSpacing: "0",
//               verticalAlign: "middle",
//               paddingLeft: 1,
//               color: "#424242",
//             }}
//           >
//             4. Family data
//           </Typography>
//           <Box className={styles.hasChildrenContainer}>
//             <Typography
//               sx={{
//                 fontFamily: "Open Sans",
//                 fontWeight: 600,
//                 fontSize: "14px",
//                 lineHeight: "20px",
//                 letterSpacing: "0",
//                 verticalAlign: "middle",
//                 paddingLeft: 1,
//                 color: "#424242",
//               }}
//             >
//               Has children:
//             </Typography>
//             <Box className={styles.hasChildrenRadioButto}>
//               <Box
//                 display={"flex"}
//                 alignItems={"center"}
//                 justifyContent={"center"}
//                 gap={32}
//                 height={42}
//                 width={162}
//               >
//                 <RadioGroup
//                   row
//                   aria-labelledby="demo-radio-buttons-group-label"
//                   defaultValue="No"
//                   name="radio-buttons-group"
//                 >
//                   <FormControlLabel
//                     value="Yes"
//                     control={<Radio />}
//                     label="Yes"
//                   />
//                   <FormControlLabel value="No" control={<Radio />} label="No" />
//                 </RadioGroup>
//               </Box>
//             </Box>
//           </Box>
//         </Box>
//         <Box className={styles.numberOfChildrenContainer}>
//           <Typography
//             sx={{
//               fontFamily: "Open Sans",
//               fontWeight: 600,
//               fontSize: "14px",
//               lineHeight: "20px",
//               letterSpacing: "0",
//               verticalAlign: "middle",
//               color: "#424242",
//             }}
//           >
//             Number of children by age:
//           </Typography>

//           <Box className={styles.numberOfChildrenInputs}>
//             <Box sx={{ width: 220 }}>
//               <TextField
//                 placeholder="0 to 4 years"
//                 type="number"
//                 InputProps={{
//                   sx: {
//                     height: 48,
//                     width: 220,
//                   },
//                 }}
//                 className={styles.select}
//               ></TextField>
//             </Box>

//             <Box sx={{ width: 220 }}>
//               <TextField
//                 placeholder="5 to 12 years"
//                 type="number"
//                 InputProps={{
//                   sx: {
//                     height: 48,
//                     width: 220,
//                   },
//                 }}
//                 className={styles.select}
//               ></TextField>
//             </Box>
//             <Box sx={{ width: 220 }}>
//               <TextField
//                 placeholder="13 to 18 years"
//                 type="number"
//                 InputProps={{
//                   sx: {
//                     height: 48,
//                     width: 220,
//                   },
//                 }}
//                 className={styles.select}
//               ></TextField>
//             </Box>
//             <Box sx={{ width: 220 }}>
//               <TextField
//                 placeholder="+ 18 years"
//                 type="number"
//                 InputProps={{
//                   sx: {
//                     height: 48,
//                     width: 220,
//                   },
//                 }}
//                 className={styles.select}
//               ></TextField>
//             </Box>
//           </Box>
//         </Box>
//         <Box className={styles.stepperController}>
//           <Button className={styles.backButton}>BACK</Button>
//           <Box className={styles.stepperActions}>
//             <Button className={styles.cancelButton}>CANCEL</Button>
//             <Button className={styles.continueButton}>CONTINUE</Button>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default PersonalDetailsRegistration;


// file: page.tsx
import { cookies } from 'next/headers';
import { getIronSession } from 'iron-session';
import { sessionOptions, SessionData } from '@/libs/irron-session';
import PersonalDetailsRegistration from '@/components/personal-details/form';
import { redirect } from 'next/navigation';

export default async function PersonalDetailsPage() {
  const session = await getIronSession<SessionData>(
    await cookies(),
    sessionOptions
  );

  // If session or applicantData is missing, redirect or return null
  if (!session || !session.applicantData) {
    redirect("/login")
  }

  return <PersonalDetailsRegistration applicantData={session.applicantData} />;
}
