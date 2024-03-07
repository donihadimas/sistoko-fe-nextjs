export const capitalizeEachWord = (str: string): string => {
  return str.replace(/\b\w/g, (match) => match.toUpperCase());
};
