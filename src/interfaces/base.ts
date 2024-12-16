import { IconType } from "react-icons";

export interface InputFieldProps {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
  icon?: IconType;
  iconClassName?: string;
  containerClassName?: string;
  inputClassName?: string;
}

export interface RadioButtonProps {
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export interface LoginFormValues {
  email: string;
  password: string;
  role: "user" | "staff" | "admin" | "";
}

export interface LoginResponse {
  success: boolean;
  message: string;
  data: any;
  role: string;
}

export interface ErrorResponse {
  message: string;
}
