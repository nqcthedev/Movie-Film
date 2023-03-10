export const emailRegex = /^\S+@\S+\.\S+$/;
export const EMAIL_REGEX =
  /^\s*(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))\s*$/;
export const PASSWORD_REGEX =
  /^(?=.*\d)(?=.*[!@#$%^&*+-:])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
export const INT_NUMBER = /^[0-9]*?$/;
// eslint-disable-next-line no-useless-escape
export const FLOAT_NUMBER = /^[0-9]*?\,?[0-9]*?$/;
export const CURRENCY_NUMBER = /^\d+(\.\d+)*$/;
export const NUMBER_REGEX = /^-?\d*(\.\d*)?$/;
export const PHONE_NUMBER_REGREX = /^[+]*(0|8)[0-9]*$/;
export const DECIMAL_NUMBER = /^[0-9]*?\.?[0-9]*?$/;