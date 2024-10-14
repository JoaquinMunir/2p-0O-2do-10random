let generateN = (n) => (Math.ceil(Math.random()*n))

let numAlt10 = (n) => {
let a = 0 
let numAlt = {}
for (let i = 0; i < n; i++) {
  a = generateN(100)
  numAlt[a]= a
} 
return numAlt 
}

console.log(numAlt10(10))