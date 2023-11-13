export const getFormattedDateTime = (date: string) => {
  return new Date(date).toLocaleString('ru', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};
