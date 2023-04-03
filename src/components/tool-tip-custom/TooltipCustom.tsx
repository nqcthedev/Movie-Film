import React from 'react';
import Tooltip, {TooltipProps} from '@mui/material/Tooltip';

// -------------------------------------------------

interface Props extends  TooltipProps  {
  children: any;

}

const ForwardedTooltip = React.forwardRef(({ children, ...other }: Props, ref) => {
  // Spread the props on the returned element
  return (
    <Tooltip {...other} ref={ref}>
      {children}
    </Tooltip>
  );
});

export default ForwardedTooltip;