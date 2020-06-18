export const storeToken = (token: string) => ({
  type: "USER_TOKEN",
  token,
});

export const clearToken = () => ({
  type: "CLEAR_TOKEN",
});

export const storeContent = (section: string, content: string) => ({
  type: "CONTENT",
  section,
  content,
});
