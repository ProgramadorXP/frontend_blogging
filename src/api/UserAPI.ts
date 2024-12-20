import { isAxiosError } from "axios";
import api from "../lib/axios";
import { UserRegistationForm } from "../types";

export const getUser = async (username: string) => {
  try {
    const { data } = await api.get(`/users/${username}`);
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error.response?.data);
      return error.response?.data;
    }
  }
};

export const login = async (username: string, password: string) => {
  try {
    const { data } = await api.post("/signin", {
      username,
      password,
    });
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error.response?.data);
      return error.response?.data;
    }
  }
};

export const createAccount = async (formData: UserRegistationForm) => {
  try {
    const { data } = await api.post<string>('/signup', formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error); //Catch the error message from backend
    }
  }
};