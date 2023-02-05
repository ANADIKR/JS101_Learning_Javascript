let n=170;//68,178
if(n<=50){
  total=n*3+80;
}
else if(n<=150){
  total=(50*3)+((n-50)*5)+80;
}
else{
  total=(50*3)+(100*5)+((n-150)*10)+80;
}
console.log(total);

