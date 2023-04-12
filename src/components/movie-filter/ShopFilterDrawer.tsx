import React from "react";
// form
import { Controller, useFormContext } from "react-hook-form";
// @mui
import {
  Box,
  Radio,
  Stack,
  Badge,
  Button,
  Drawer,
  Rating,
  Divider,
  IconButton,
  Typography,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
// config
import { NAV } from "@/config-global";
// components
import Iconify from "@/components/iconify";
import Scrollbar from "@/components/scrollbar";
import { RHFMultiCheckbox } from "@/components/hook-form";

// ----------------------------------------------------------------------

export const FILTER_GENDER_OPTIONS = [
  {
    value: 28,
    label: "Action",
  },
  {
    value: 12,
    label: "Adventure",
  },
  {
    value: 16,
    label: "Animation",
  },
  {
    value: 35,
    label: "Comedy",
  },
  {
    value: 80,
    label: "Crime",
  },
  {
    value: 99,
    label: "Documentary",
  },
  {
    value: 18,
    label: "Drama",
  },
  {
    value: 10751,
    label: "Family",
  },
  {
    value: 14,
    label: "Fantasy",
  },
  {
    value: 36,
    label: "History",
  },
  {
    value: 27,
    label: "Horror",
  },
  {
    value: 10402,
    label: "Music",
  },
  {
    value: 9648,
    label: "Mystery",
  },
  {
    value: 10749,
    label: "Romance",
  },
  {
    value: 878,
    label: "Science Fiction",
  },
  {
    value: 10770,
    label: "TV Movie",
  },
  {
    value: 53,
    label: "Thriller",
  },
  {
    value: 10752,
    label: "War",
  },
  {
    value: 37,
    label: "Western",
  },
];

export const FILTER_RATING_OPTIONS = [
  "up4Star",
  "up3Star",
  "up2Star",
  "up1Star",
];

type Props = {
  open: boolean;
  isDefault: boolean;
  onOpen: VoidFunction;
  onClose: VoidFunction;
  onResetFilter: VoidFunction;
};

const ShopFilterDrawer = ({
  open,
  onOpen,
  onClose,
  isDefault,
  onResetFilter,
}: Props) => {
  const { control } = useFormContext();

  return (
    <>
      <Button
        disableRipple
        color="inherit"
        endIcon={<Iconify icon="ic:round-filter-list" />}
        onClick={onOpen}
      >
        Filter
      </Button>

      <Drawer
        anchor="right"
        open={open}
        onClose={onClose}
        BackdropProps={{
          invisible: true,
        }}
        PaperProps={{
          sx: { width: NAV.W_BASE },
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ pl: 2, pr: 1, py: 2 }}
        >
          <Typography variant="subtitle1">Filters</Typography>

          <IconButton onClick={onClose}>
            <Iconify icon="eva:close-fill" />
          </IconButton>
        </Stack>

        <Divider />

        <Scrollbar>
          <Stack spacing={3} sx={{ p: 2.5 }}>
            <Stack spacing={1}>
              <Typography variant="subtitle1">Gender</Typography>
              <RHFMultiCheckbox
                name="gender"
                options={FILTER_GENDER_OPTIONS}
                sx={{ width: 1 }}
              />
            </Stack>

            <Stack spacing={1}>
              <Typography variant="subtitle1">Rating</Typography>

              <Controller
                name="rating"
                control={control}
                render={({ field }) => (
                  <RadioGroup {...field}>
                    {FILTER_RATING_OPTIONS.map((item, index) => (
                      <FormControlLabel
                        key={item}
                        value={item}
                        control={
                          <Radio
                            disableRipple
                            color="default"
                            icon={<Rating readOnly value={4 - index} />}
                            checkedIcon={<Rating readOnly value={4 - index} />}
                            sx={{
                              "&:hover": { bgcolor: "transparent" },
                            }}
                          />
                        }
                        label="& Up"
                        sx={{
                          my: 0.5,
                          borderRadius: 1,
                          "&:hover": { opacity: 0.48 },
                          ...(field.value.includes(item) && {
                            bgcolor: "action.selected",
                          }),
                        }}
                      />
                    ))}
                  </RadioGroup>
                )}
              />
            </Stack>
          </Stack>
        </Scrollbar>

        <Box sx={{ p: 2.5 }}>
          <Badge
            color="error"
            variant="dot"
            anchorOrigin={{ vertical: "top", horizontal: "left" }}
            invisible={isDefault}
            sx={{ width: 1 }}
          >
            <Button
              fullWidth
              size="large"
              type="submit"
              color="inherit"
              variant="outlined"
              onClick={onResetFilter}
              startIcon={<Iconify icon="eva:trash-2-outline" />}
            >
              Clear
            </Button>
          </Badge>
        </Box>
      </Drawer>
    </>
  );
};

export default ShopFilterDrawer;
