import Image from '@/components/image/Image'
import { PATH_DASHBOARD } from '@/routes/path'
import { TMDB_IMAGE } from '@/utils/urlImage';
import { Card, Link, Rating, Stack } from '@mui/material'
import React from 'react';
import { Link as RouterLink } from "react-router-dom";

// --------------------------------------------------------------------------------


type Props =  {
  cast: any 
}


const TopCastCard = ({cast}:Props) => {

  const linkTo = PATH_DASHBOARD.detail.view(cast?.id);
  
  return (
    <Card>
      <Image
          alt={cast.title}
          src={`${TMDB_IMAGE}${cast.name}`}
          ratio="3/4"
          sx={{ borderRadius: 1.5 }}
        />

        <Stack spacing={2.5} sx={{ p: 2.8 }}>
          <Link
            component={RouterLink}
            to={linkTo}
            color="inherit"
            variant="subtitle2"
            noWrap
          >
            {cast.name}
          </Link>
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          px={1.5}
        >
          {/* <Rating
            value={vote_average - 3.5}
            precision={0.1}
            readOnly
            size="small"
            sx={{ ml: -1 }}
          /> */}

          {/* <Stack direction="row" spacing={0.5} alignItems="center">
            <Iconify icon="ic:outline-remove-red-eye" />

            <Box component="span">{popularity.toFixed(2)}</Box>
          </Stack> */}
        </Stack>
    </Card>
  )
}

export default TopCastCard