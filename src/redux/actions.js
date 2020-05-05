export const storeToken = (token) => ({
  type: "USER_TOKEN",
  token,
});

export const clearToken = () => ({
  type: "CLEAR_TOKEN",
});

export const storeHomeContent = (homeContent) => ({
  type: "HOME_CONTENT",
  homeContent,
});
