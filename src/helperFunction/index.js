// reverse str

export const reverseString = (str) => str?.split("")?.reverse()?.join("");

export const getArrayOfKey = (array, key = "") =>
  array?.map((data) => data?.[key]);
