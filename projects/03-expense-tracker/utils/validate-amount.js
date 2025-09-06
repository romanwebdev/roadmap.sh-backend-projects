const validateAmount = (value) => {
  const num = Number(value);
  if (isNaN(num)) {
    throw new Error('Amount must be a number');
  }
  if (num < 0) {
    throw new Error('Amount must be greater than 0');
  }
  return num;
};

module.exports = validateAmount;
