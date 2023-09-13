export const isValidFormData = formData => {
  const { username, secret } = formData;

  if (!username || !secret) {
    return false;
  }

  return true;
};
