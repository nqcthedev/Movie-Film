// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import {
  Box,
  Chip,
  Select,
  Checkbox,
  MenuItem,
  TextField,
  InputLabel,
  SelectProps,
  FormControl,
  OutlinedInput,
  TextFieldProps,
  FormHelperText,
} from '@mui/material';

// ----------------------------------------------------------------------

type RHFSelectProps = TextFieldProps & {
  name: string;
  native?: boolean;
  maxHeight?: boolean | number;
  children: React.ReactNode;
};

export function RHFSelect({
  name,
  native,
  maxHeight = 220,
  helperText,
  children,
  ...other
}: RHFSelectProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          select
          fullWidth
          SelectProps={{
            native,
            MenuProps: {
              PaperProps: {
                sx: {
                  ...(!native && {
                    px: 1,
                    maxHeight: typeof maxHeight === 'number' ? maxHeight : 'unset',
                    '& .MuiMenuItem-root': {
                      px: 1,
                      borderRadius: 0.75,
                      typography: 'body2',
                      textTransform: 'capitalize',
                    },
                  }),
                },
              },
            },
            sx: { textTransform: 'capitalize' },
          }}
          error={!!error}
          helperText={error ? error?.message : helperText}
          {...other}
        >
          {children}
        </TextField>
      )}
    />
  );
}
