const loginBtn=document.getElementById("Enter");
loginBtn.addEventListener("click",function(){
   const loginArea = document.getElementById("abid");
   loginArea.style.display="none";
   const calculate = document.getElementById("transaction-area");
   calculate.style.display="block";

})

const deposit =document.getElementById("deposit-btn");
deposit.addEventListener("click",function(){
   const depositAmount = document.getElementById("deposit-amount").value;
   const depositmoney = parseFloat(depositAmount);

   const currentDeposit=document.getElementById("current-deposit").innerText;
   const currentDepositMoney = parseFloat(currentDeposit);
   const totaldeposit =currentDepositMoney+ depositmoney;
   document.getElementById("current-deposit").innerText=totaldeposit;

   const currentBlanc = document.getElementById("current-blance").innerText;
   const currentBlanceMoney=parseFloat(currentBlanc);
   const totablance = depositmoney + currentBlanceMoney;
   document.getElementById("current-blance").innerText=totablance;

   document.getElementById("deposit-amount").value = "";

})

const withdraw =document.getElementById("withdraw-btn");
withdraw.addEventListener("click",function(){
   const withdrawAmount = document.getElementById("withdraw-amount").value;
   const withdrawmoney = parseFloat(withdrawAmount);

   const currentwithdraw=document.getElementById("current-withdraw").innerText;
   const currentWithdrawMoney = parseFloat(currentwithdraw);

   const totalwithdraw =withdrawmoney + currentWithdrawMoney;
   document.getElementById("current-withdraw").innerText = totalwithdraw;

   const currentBlanc1 = document.getElementById("current-blance").innerText;
   const currentBlanceMoney1 =parseFloat(currentBlanc1);
   const totablance1 =currentBlanceMoney1-withdrawmoney ;
   document.getElementById("current-blance").innerText=totablance1;
   
   document.getElementById("withdraw-amount").value = "";
})