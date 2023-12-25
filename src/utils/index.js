export const isAnyEmptyFields = (fields) => {
  return Object.values(fields).some((field) => field.trim() === "");
};
