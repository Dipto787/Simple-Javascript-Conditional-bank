document.getElementById('submit-bank').addEventListener('click',function(){
    const inputfild=document.getElementById('input-fild');
    const values1=inputfild.value;

    const passwordfild=document.getElementById('password-fild');
    const values2=passwordfild.value;

    if(values1==='rdipto190@gmail.com' && values2==='dipto roy'){
         window.location.href='bank.html';
    }else{
        alert('invalid user');
    }
})