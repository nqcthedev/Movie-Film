// @mui
import { BreadcrumbsProps } from '@mui/material';

// ----------------------------------------------------------------------



export type BreadcrumbsLinkProps = {
  name?:any;
  href?:string;
  icon?:string;
};

export interface CustomBreadcrumbsProps extends BreadcrumbsProps {
  heading?: string | number;
  moreLink?: string[];
  activeLast?: boolean;
  action?: React.ReactNode;
  links: BreadcrumbsLinkProps[];
}
s