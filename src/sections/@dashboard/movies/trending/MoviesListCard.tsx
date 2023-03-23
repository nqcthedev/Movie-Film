import { Result } from '@/interface/Trending'
import React from 'react'
import { paramCase } from 'change-case';
// components
import Iconify from '@/components/iconify';
import Label from '@/components/label';
import Image from '@/components/image';
// routes
import { PATH_DASHBOARD } from '@/routes/path';
import { Card } from '@mui/material';

// ----------------------------------------------------------------------


type Props = {
  movie:Result;
}

const MoviesListCard = ({movie}: Props) => {
  const { id, name, title,backdrop_path  } = movie;

  console.log(movie)


  const linkTo = PATH_DASHBOARD.trending.view(paramCase(title?.toUpperCase() as string || name?.toUpperCase() as string))

  return (
    <Card sx={{
      "&:hover .add-favourite-btn": {
        opacity:1,
      }
    }}>

    </Card>
  )
}

export default MoviesListCard