let amount=680;
let unit=0;
let fixed=80;
if(amount<=230){
  unit=Math.floor((amount-fixed)/3);
}
else if(amount<=680){
  unit=((amount-(fixed+150))/5)+50;
}
else{
  unit=150+(amount-730)/10;
}

console.log(unit);
