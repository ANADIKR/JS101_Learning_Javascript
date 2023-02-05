let a=115;
let temp=a;
let rev=0;
let rem=0;
while(temp!=0){
  rem=temp%10;
  rev=rev*10+rem;
  temp=temp/10;
}
console.log(rev);