import { Box, Card, Skeleton, Stack } from '@mui/material'
import React from 'react'

const SkeletonTopCast = () => {
  return (
    <Card>
      <Skeleton variant="rectangular" sx={{ paddingTop: "100%" }} />
      <Stack spacing={2} sx={{ p: 3 }}>
        <Skeleton variant="text" sx={{ width: 0.5 }} />
        <Stack direction="row">
          <Skeleton variant="text" sx={{ width: 0.3 }} />
        </Stack>
      </Stack>
    </Card>
  )
}

export default SkeletonTopCast