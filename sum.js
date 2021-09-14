
// Read an unlimited number of command line arguements 

const args = process.argv.slice(2)

if(args.length < 2){
  console.log( " Please use atleast 2 arguements ");
  process.exit();
}

let total = 0;
// goes through each number 
for(let nb of args) {
const num = Number(nb);
if(isNaN(num)) {
  console.log(" please enter only numbers ")
  process.exit();
}
if (Number.isInteger(num)) {
  total += num;
}
// print the amount 
console.log("total:",total);
}

const result = sum(args)


