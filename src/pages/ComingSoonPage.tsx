import React from "react";
import { Helmet } from "react-helmet-async";
// @mui
import { alpha } from "@mui/material/styles";
import {
  Box,
  Stack,
  Button,
  Typography,
  IconButton,
  InputAdornment,
  Container,
} from "@mui/material";
// hooks
import useCountdown from "@/hooks/useCountdown";
// _mock
import { _socialsAccount } from "../_mock/arrays";
// components
import Iconify from "../components/iconify";
// assets
import { ComingSoonIllustration } from "@/assetss/illustrations/";
import CustomTextField from "@/components/custom-input/CustomTextField";
import { useSettingsContext } from "@/components/settings";
import useLocales from "@/locales/useLocales";

// --------------------------------------------------------------------------------
const ComingSoonPage = () => {
  const { days, hours, minutes, seconds } = useCountdown(
    new Date("07/07/2023 21:30")
  );

  const { themeStretch } = useSettingsContext();

  const { translate } = useLocales();

  return (
    <>
      <Helmet>
        <title> Coming Soon | 4K Movie</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : "lg"}>
        <Typography variant="h3" paragraph>
        {`${translate("comingSoon")}`}
        </Typography>

        <Typography sx={{ color: "text.secondary" }}>
        {`${translate("hardWorking")}`}
        </Typography>

        <ComingSoonIllustration sx={{ my: 10, height: 240 }} />

        <Stack
          direction="row"
          justifyContent="center"
          divider={<Box sx={{ mx: { xs: 1, sm: 2.5 } }}>:</Box>}
          sx={{ typography: "h2" }}
        >
          <TimeBlock label="Days" value={days} />

          <TimeBlock label="Hours" value={hours} />

          <TimeBlock label="Minutes" value={minutes} />

          <TimeBlock label="Seconds" value={seconds} />
        </Stack>

        <CustomTextField
          fullWidth
          placeholder="Enter your email"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button variant="contained" size="large">
                  Notify Me
                </Button>
              </InputAdornment>
            ),
            sx: { pr: 0.5 },
          }}
          sx={{ my: 5 }}
        />

        <Stack
          spacing={1}
          alignItems="center"
          justifyContent="center"
          direction="row"
        >
          {_socialsAccount.map((social) => (
            <IconButton
              key={social.value}
              // sx={{
              //   color: social.color,
              //   "&:hover": {
              //     bgcolor: alpha(social.color, 0.08),
              //   },
              // }}
            >
              <Iconify icon={social.icon} />
            </IconButton>
          ))}
        </Stack>
      </Container>
    </>
  );
};

export default ComingSoonPage;

// ----------------------------------------------------------------------

type TimeBlockProps = {
  label: string;
  value: string;
};

function TimeBlock({ label, value }: TimeBlockProps) {
  return (
    <div>
      <Box> {value} </Box>
      <Box sx={{ color: "text.secondary", typography: "body1" }}>{label}</Box>
    </div>
  );
}
