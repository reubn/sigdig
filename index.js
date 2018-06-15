module.exports = (number, digits=4, max=4) => {
const half = Math.pow(10, (digits - Math.floor(Math.log(Math.abs(number)) / Math.LN10) - 1))
const atFig = Math.round(number * half) / half

if(Math.ceil(Math.log10(atFig)) <= max) return atFig
const [first, second] = atFig.toExponential(digits-1).split('e')
return `${first}x10${[...second].map(d => ('⁰¹²³⁴⁵⁶⁷⁸⁹'[d]) || (d === '-' ? '⁻' : '')).join('')}`
}
