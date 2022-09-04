const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const phone=document.getElementById('phone');
const password=document.getElementById('password');
const repassword=document.getElementById('repassword');


function error(input,message){
    input.className='form-control is-invalid'
    const div=input.nextElementSibling;//ulaştığımız inputtan sonra gelen ilk elementi getirir
    div.innerText=message;
    div.className='invalid-feedback';
}

function succes(input){
    input.className='form-control is-valid';
}

function checkRequired(inputs){
    inputs.forEach(function(input){
        if(input.value==''){
            error(input,`${input.id} gereklidir`);
    
        }else{
            succes(input);
    
        }

    })
   
}

function validateEmail(input){
    const re=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    if(re.test(input.value)){
        succes(input);
    }else{
        error(input,'Hatalı mail girişi');
    }
}

function checkLength(input,min,max){
    if(input.value.length<min){
        error(input,`${input.id} en az ${min} karakter kadar olmalıdır`);
    }else if(input.value.length>max){
        error(input,`${input.id} en fazla ${max} karakter kadar olmalıdır`);
    }else{
        succes(input);
    }
}

function checkPassword(input1,input2){
    if(input1.value!==input2.value){
        error(input2,'Parolalar Eşleşmiyor');
    }
}

function checkPhone(input){
    var exp=/^\d{10}$/;
    if(!exp.test(input.value)){
        error(input,'Telefon 10 karakterli olmalıdır');
    }

}

form.addEventListener('submit',function(e){
    e.preventDefault();

    checkRequired([username,email,phone,password,repassword]);

    checkLength(username,7,30);
    checkLength(password,8,15);
    checkPassword(password,repassword);
    checkPhone(phone);
    validateEmail(email);

   

    /*if(username.value===''){
        error(username,'Lütfen Bilgileri Giriniz');
        
        

    }else{
        succes(username);
        
    }

    if(email.value===''){
        error(email,'Lütfen Emaili Giriniz');

    }
    else{
        succes(email);
    }

    if(phone.value===''){
        error(phone,'Lütfen Telefonu Giriniz');
        
    }
    else{
        succes(phone);
    }

    if(password.value===''){
        error(password,'Lütfen Şifreyi Giriniz');
        

        

    }

    else{
        succes(password);
    }

    if(repassword.value===''){
        error(repassword,'Lütfen Şifreyi Tekrarlayınız');

    }
    else{
        succes(repassword);
    }*/
});