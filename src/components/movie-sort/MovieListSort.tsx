import React from 'react'
import { useState } from 'react';
// form
import { Controller, useFormContext } from 'react-hook-form';
// @mui
import { Button, MenuItem, Box } from '@mui/material';
// components
import Iconify from '@/components/iconify';
import MenuPopover from '@/components/menu-popover';

// ----------------------------------------------------------------------

const OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'new', label: 'Newest' },
  { value: 'movie_average.desc', label: 'Rating: High - Low' },
  { value: 'movie_average.asc', label: 'Rating: Low - High' },
];

function renderLabel(label: string) {
  return {
    featured: 'Featured',
    new: 'Newest',
    ratingDesc: 'Rating: High - Low',
    ratingAsc: 'Rating: Low - High',
  }[label];
}

// ----------------------------------------------------------------------


const MovieListSort = () => { 
  const {control} = useFormContext();

  const [openPopover, setOpenPopover] = useState<HTMLElement | null>(null);

  const handleOpenPopover = (event:React.MouseEvent<HTMLElement>) => {
    setOpenPopover(event.currentTarget)
  }

  const handleClosePopover = () => {
    setOpenPopover(null)
  }

  return (
    <Controller
      name="sortBy"
      control={control}
      render={({ field }) => (
        <>
          <Button
            disableRipple
            color="inherit"
            onClick={handleOpenPopover}
            endIcon={
              <Iconify icon={openPopover ? 'eva:chevron-up-fill' : 'eva:chevron-down-fill'} />
            }
            sx={{ fontWeight: 'fontWeightMedium' }}
          >
            Sort By:
            <Box component="span" sx={{ color: 'text.secondary', ml: 0.5 }}>
              {renderLabel(field.value)}
            </Box>
          </Button>

          <MenuPopover open={openPopover} onClose={handleClosePopover}>
            {OPTIONS.map((option) => (
              <MenuItem
                key={option.value}
                selected={option.value === field.value}
                onClick={() => {
                  handleClosePopover();
                  field.onChange(option.value);
                }}
              >
                {option.label}
              </MenuItem>
            ))}
          </MenuPopover>
        </>
      )}
    />
  )
}

export default MovieListSort