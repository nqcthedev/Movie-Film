import { Skeleton, Stack } from '@mui/material'
import React from 'react'

const SkeletonCommentsMovie = () => {
  return (
    <Stack spacing={3} sx={{ py: 5, px: { md: 5 } }}>
      <Stack direction="row" alignItems={"center"} spacing={3}>
      <Skeleton variant="circular" width={80} height={80} />
      <Skeleton variant="text" height={100} width={"100%"}/>
      </Stack>
      <Stack direction="row" alignItems={"center"} spacing={3} sx={{ml:8}}>
      <Skeleton variant="circular" width={80} height={80} />
      <Skeleton variant="text" height={100} width={"100%"}/>
      </Stack>
    </Stack>
  )
}

export default SkeletonCommentsMovie