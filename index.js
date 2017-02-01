module.exports = (number, digits) => {
  const half = Math.pow(10, (digits - Math.floor(Math.log(Math.abs(number)) / Math.LN10) - 1))
  return Math.round(number * half) / half
}
