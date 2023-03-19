// @mui
import { Card, Skeleton, Stack, CardProps } from '@mui/material';

// ----------------------------------------------------------------------

export default function SkeletonBanner({...other}: CardProps) {
  <Card {...other}>
    <Skeleton variant="rectangular" sx={{ paddingTop: '100%' }}/>
  </Card>
}