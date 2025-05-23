import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import styles from "./modal.module.scss";

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

export default function CustomModal({
  submit,
  title,
  description,
  setOpen,
  open,
}: {
  submit: (index?: number) => void;
  title: string;
  description: string;
  setOpen: (open: boolean) => void;
  open: boolean;
}) {
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    submit();
    setOpen(false);
  };

  return (
    <>
      <Modal
        open={open}
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
          <Typography
            sx={{
              fontFamily: "Open Sans",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "20px",
              letterSpacing: "0",
              verticalAlign: "middle",
              height: 24,
              color: "#424242",
            }}
          >
            {description}
          </Typography>
          <Box className={styles.modalActions}>
            <Button onClick={handleClose}>CANCEL</Button>
            <Button onClick={handleSubmit}>DELETE</Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
