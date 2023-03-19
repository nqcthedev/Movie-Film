import { m, MotionProps, MotionValue } from "framer-motion";
// @mui
import { Box, BoxProps } from "@mui/material";
//
import { varFade } from "./variants";
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
  Key,
} from "react";

// ----------------------------------------------------------------------

type Props = BoxProps & MotionProps;

interface TextAnimateProps extends Props {
  text: string | any;
}

export default function TextAnimate({
  text,
  variants,
  sx,
  ...other
}: TextAnimateProps) {
  return (
    <Box
      component={m.div}
      sx={{
        m: 0,
        typography: "h1",
        overflow: "hidden",
        display: "inline-flex",
        whiteSpace: "pre-line",
        ...sx,
      }}
      {...other}
    >
      {text
        .split("")
        .map(
          (
            letter:
              | string
              | number
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | ReactFragment
              | ReactPortal
              | MotionValue<number>
              | MotionValue<string>
              | null
              | undefined,
            index: Key | null | undefined
          ) => (
            <m.span key={index} variants={variants || varFade().inUp}>
              {letter}
            </m.span>
          )
        )}
    </Box>
  );
}
