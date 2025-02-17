export const capitalizeFirstLetter = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const formatTemperature = (temp: number): string => {
  return `${temp.toFixed(1)}°C`;
};
