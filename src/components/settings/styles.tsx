// @mui
import { alpha, styled } from '@mui/material/styles';
import { CardActionArea, Radio, FormControlLabel, Stack, Box } from '@mui/material';

// ----------------------------------------------------------------------

export const StyledWrap = styled(Box)(() => ({
  gap: 8,
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
}));

// ----------------------------------------------------------------------

type StyledCardProps = {
  selected: boolean;
};

export const StyledCard = styled(CardActionArea, {
  shouldForwardProp: (prop) => prop !== 'selected',
})<StyledCardProps>(({ selected, theme }) => ({
  height: 72,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.disabled,
  borderRadius: theme.shape.borderRadius,
  border: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
  '& .svg-color': {
    width: 28,
    height: 28,
  },
  ...(selected && {
    color: theme.palette.primary.main,
    boxShadow: theme.customShadows.z12,
    borderColor: alpha(theme.palette.grey[500], 0.24),
  }),
}));

// ----------------------------------------------------------------------



type MaskControlProps = {
  value: string;
};

export function MaskControl({ value }: MaskControlProps) {
  return (
    <FormControlLabel
      label=""
      value={value}
      control={<Radio sx={{ display: 'none' }} />}
      sx={{
        m: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        position: 'absolute',
      }}
    />
  );
}

// ----------------------------------------------------------------------