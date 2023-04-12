import Label from '@/components/label/Label'
import { useSelector } from '@/redux/store';
import React from 'react'

const LabelNotification = () => {
  const { favourite } = useSelector((state) => state.persisted);

  

  return (
    <Label color="error">{favourite.length}+</Label>
  )
}

export default LabelNotification