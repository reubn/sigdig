export default (a,b)=>(c=10**(b-Math.floor(Math.log(a)/Math.LN10)-1),Math.round(a*c)/c)
