let amount=930;
let unit=0;
let fixed=80;
if(amount<=230){
  unit=Math.floor((amount-fixed)/3);
}
else if(amount<=830){
  unit=((amount-(150+fixed))/5)+50;
  console.log("***");
}
console.log(unit);