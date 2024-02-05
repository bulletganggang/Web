function getArraySum(arr) {
  return arr.reduce((sum, value) => sum += value, 0)
}

module.exports = {
  getArraySum
}