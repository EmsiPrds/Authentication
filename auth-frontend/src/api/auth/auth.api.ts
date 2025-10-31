import axiosInstance from "@/axios/axiosInstance";
import type { AccountType } from "@/types/auth/auth.type";

export const registerApi = async ({
  firstName,
  middleName,
  lastName,
  suffix,
  email,
  username,
  password,
}: Partial<AccountType>) => {
  const response = await axiosInstance.post("/auth/register", {
    firstName,
    middleName,
    lastName,
    suffix,
    email,
    username,
    password,
  });
  return response;
};

export const loginApi = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const response = await axiosInstance.post("/auth/login", {
    username,
    password,
  });
  return response;
};

export const logoutApi = async () => {
  const response = await axiosInstance.post("/auth/logout");
  return response;
};
