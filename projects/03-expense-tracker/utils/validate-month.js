const validateMonth = (value) => {
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const num = Number(value);
  if (isNaN(num)) {
    throw new Error('The month must be a number');
  }
  if (!months.includes(num)) {
    throw new Error('The month is incorrect. It should be between 1 and 12.');
  }
  return num;
};

module.exports = validateMonth;
