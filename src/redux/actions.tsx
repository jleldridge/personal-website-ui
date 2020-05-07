import { HomeContent } from "../types";

export const storeToken = (token: string) => ({
  type: "USER_TOKEN",
  token,
});

export const clearToken = () => ({
  type: "CLEAR_TOKEN",
});

export const storeHomeContent = (homeContent: HomeContent) => ({
  type: "HOME_CONTENT",
  homeContent,
});
