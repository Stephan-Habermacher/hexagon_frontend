export const formatDate = (datestring: string) => {
  const [year, month, day] = datestring.split("-");
  return `${day}.${month}.${year}`;
};
