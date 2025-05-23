import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import styles from "./modal.module.scss";
import { PhoneNumberTypeEnum } from "@/features/address-detail/address-details.type";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 416,
  bgcolor: "background.paper",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function ChoosePhoneTypeModal({
  title,
  setPhoneModal,
  openPhoneModal,
  appendPhone,
  phoneFeids,
}: {
  title: string;

  setPhoneModal: (open: boolean) => void;
  openPhoneModal: boolean;
  appendPhone: any;
  phoneFeids: any;
}) {
  const [phoneType, setPhoneType] = React.useState<PhoneNumberTypeEnum>(
    PhoneNumberTypeEnum.WhatsApp
  );

  const handleClose = () => {
    setPhoneModal(false);
  };

  const handleChange = (e: any) => {
    setPhoneType(e.target.value);
  };

  const handleSubmit = () => {
    phoneFeids.length < 5 &&
      appendPhone({
        number: "",
        country_code: "IN",
        type: phoneType,
      });
    setPhoneModal(false);
  };

  return (
    <>
      <Modal
        open={openPhoneModal}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style }} className={styles.modalContainer}>
          <Typography
            sx={{
              fontFamily: "Open Sans",
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "28px",
              letterSpacing: "0",
              verticalAlign: "middle",
              height: 24,
              color: "#424242",
            }}
          >
            {title}
          </Typography>

          <FormControl>
            <RadioGroup
              onChange={(e) => handleChange(e)}
              defaultValue="WhatsApp"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="WhatsApp"
                control={<Radio />}
                label="WhatsApp"
              />
              <FormControlLabel
                value="Phone"
                control={<Radio />}
                label="Phone"
              />
            </RadioGroup>
          </FormControl>

          <Box className={styles.modalActions}>
            <Button onClick={handleClose}>CANCEL</Button>
            <Button onClick={handleSubmit}>ADD</Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
