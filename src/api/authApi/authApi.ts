import { LoginFormValues, LoginResponse } from "@/interfaces/base";
import axiosInstance from "@/lib/axiosInstance";

export const login = async (
    credentials: LoginFormValues
  ): Promise<LoginResponse> => {
    const response = await axiosInstance.post("/login", credentials);
    console.log(response.data);
    return response.data;
  };
  