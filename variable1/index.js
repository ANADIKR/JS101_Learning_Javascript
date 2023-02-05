// let unit=120;
// let bill=80;
// for(let i=1;i<=unit;i++){
//   if(i<=50)bill+=3;
//   else if(i<=150)bill+=5;
//   else bill+=10;
// }
// console.log(bill);

// let n= 150;//68,178
// if(n<=50){
//   total=n*3+80;
// }
// else if(n<=150){
//   total=(50*3)+((n-50)*5)+80;
// }
// else{
//   total=(50*3)+(100*5)+((n-150)*10)+80;
// }
// console.log(total);




 let amount=930;
 let i=80;
let unit=0;
while(i<amount){
  if(i<230){
    unit+=1;
    i+=3;}
  else if(i<730){
    unit+=1;
    i+=5;
  }
  else 
  {
    unit+=1;
    i+=10;
  }
  
}    
console.log(unit);