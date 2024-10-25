document.getElementById('Deposit-button').addEventListener('click',function(){
    const clicktoDepositfild=document.getElementById('input-fild-tow'); 
    const clicktoDepositfildinput=clicktoDepositfild.value;
    const clicktoDepositfildinputNumber=parseFloat(clicktoDepositfildinput); 
    clicktoDepositfild.value=' ';
    if(isNaN(clicktoDepositfildinputNumber)){
        alert('please valid a number');
        return;
    }
    const Depositfild=document.getElementById('text');
    const inner=Depositfild.innerText;
    const DepositfildmakeNumber=parseFloat(inner);
    const calculationandSum=clicktoDepositfildinputNumber+DepositfildmakeNumber;
    Depositfild.innerText=calculationandSum; 
    const addBalance=document.getElementById('minas-text-in-inputfild'); 
    const addBalanceInner=addBalance.innerText;
    const addBalanceInnerNumber=parseFloat(addBalanceInner);
    const addBalanceInnerNumbertotalSum=addBalanceInnerNumber+clicktoDepositfildinputNumber;
    addBalance.innerText=addBalanceInnerNumbertotalSum; 
    
})

document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawinputFild= document.getElementById('input-fild-three');
    const withdrawinputFildvalues=withdrawinputFild.value;
    const withdrawinputFildmakeNumber=parseFloat(withdrawinputFildvalues);
    if(isNaN(withdrawinputFildmakeNumber)){
        alert('please valid a number');
        return;
    }
    const changetexts=document.getElementById('change-withdrawText');
    const changetextsinner=changetexts.innerText;
    const  changetextsinnermakeNumber=parseFloat(changetextsinner); 
    const withdrawinputFildvaluesminasbalancetext=document.getElementById('minas-text-in-inputfild');
    const withdrawinputFildvaluesminasbalancetextinner=withdrawinputFildvaluesminasbalancetext.innerText;
     const withdrawinputFildvaluesminasbalancetextinnermakeNumber=parseFloat(withdrawinputFildvaluesminasbalancetextinner);
     withdrawinputFild.value=' ';
     if(withdrawinputFildvaluesminasbalancetextinnermakeNumber<withdrawinputFildmakeNumber){
        alert('tomar bank a ato taka nai');
        return;
     }
     const changetextsinnersumwithdrawinputFildvalues=changetextsinnermakeNumber+withdrawinputFildmakeNumber;
    changetexts.innerText=changetextsinnersumwithdrawinputFildvalues;
        
     
     const withdrawinputFildvaluesminasbalancetextinnerminasinputvalue=withdrawinputFildvaluesminasbalancetextinnermakeNumber-withdrawinputFildmakeNumber;
     withdrawinputFildvaluesminasbalancetext.innerText=withdrawinputFildvaluesminasbalancetextinnerminasinputvalue;
    withdrawinputFild.value=' ';
})