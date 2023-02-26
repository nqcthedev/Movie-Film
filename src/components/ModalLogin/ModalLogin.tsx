import { Close } from "@mui/icons-material";
import {
  Backdrop,
  Box,
  Button,
  Fade,
  IconButton,
  InputAdornment,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { FC } from "react";

import palette from "@/styles/theme/palette";

import SHOW_PASSWORD_ICON from "@/assets/show-pass-icon.svg";
import HIDE_PASSWORD_ICON from "@/assets/hide-pass-icon.svg";

interface ModalProps {
  handleOpen: () => void;
  handleClose: () => void;
  open: boolean;
}

const ModalLogin: FC<ModalProps> = ({ handleOpen, open, handleClose }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "400px",
    width: "100%",
    height: "530px",
    bgcolor: "background.paper",
    border: "2px solid #fff !important",
    borderRadius: "6px",
    boxShadow: 24,
    padding: "5px 5px",
  };
  return (
    <Box>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        disableEnforceFocus
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Box display={"flex"} justifyContent={"flex-end"}>
              <IconButton onClick={handleClose}>
                <Close />
              </IconButton>
            </Box>
            <Box px={5}>
              <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
                Login
              </Typography>
              <Box mt={4}>
                <TextField

                  type="text"
                
                  placeholder="Please input email"
                  fullWidth
                  sx={{
                    mt: 2,
                    '& .MuiInputBase-root': {
                      borderRadius: '8px',
                      background: palette.secondary.lighter,
                      color: palette.primary.light,
                      fontSize: '14px',
                      '& input': {
                        padding: '16px 20px',
                      },
                    },
                    // '& .MuiFormHelperText-root': {
                    //   color: theme.palette.error.lighter,
                    // },
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                  }}
                  InputProps={{
                    disableUnderline: true,
                  }}
                />

                <TextField
                   sx={{
                    mt: 2,
                    '& .MuiInputBase-root': {
                      borderRadius: '8px',
                      background: palette.secondary.lighter,
                      color: palette.primary.light,
                      fontSize: '14px',
                      '& input': {
                        padding: '16px 20px',
                      },
                    },
                    // '& .MuiFormHelperText-root': {
                    //   color: theme.palette.error.lighter,
                    // },
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                  }}
                  fullWidth
                  placeholder="Please input password"
                  type={showPassword ? "text" : "password"}
                  // variant="filled"
                  InputProps={{
                    disableUnderline: true,
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onMouseDown={handleMouseDownPassword}
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <img src={HIDE_PASSWORD_ICON}/> : <img src={SHOW_PASSWORD_ICON}/>}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default ModalLogin;
