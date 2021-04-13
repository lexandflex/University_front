export const getFormattedDate = (date) => {
  const datetime = new Date(date);
  const day = `0${datetime.getDate()}`.slice(-2);
  const month = ('0' + (datetime.getMonth() + 1)).slice(-2);
  const year = datetime.getFullYear();
  return day + '/' + month + '/' + year;
};
