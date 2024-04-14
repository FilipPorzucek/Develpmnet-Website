const itext=document.querySelector('.itext');
  const price = localStorage.getItem('price');
  const calculate=document.querySelector('.calculate');
  const SelfDeposit=document.querySelector('.SelfDeposit');
  const installments=document.querySelector('.installment');
  const outcome=document.querySelector('.outcome');
  itext.value=price+"zł";
  const condition=(0.1 * price);
  calculate.addEventListener('click',function(){
let deposit=SelfDeposit.value;
let installment=installments.value
if(deposit>=condition){
let result=(price-deposit)/installment;
result=result.toFixed(2);
outcome.innerHTML="Wysokość raty wynosi:"+' '+result+'zł';
} else{
  alert("Wkład własny minimum 10%");
}
  })
  