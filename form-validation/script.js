function clearErrors(){
    errors=document.getElementsByClassName('formerror');
    for(let item of errors){
        item.innerHTML='';

    }
}

function seterror(id,error){
    element=document.getElementById(id);
    console.log(element);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}
function validateForm(){
    clearErrors();
    let returnvalue=true;
    //perform validation and if fails,set the value of return to false.
    let name=document.forms['myForm']['fname'].value;

    if(name.length<8){
        seterror('name','*must be type up 8 letter.');
        returnvalue=false;
    }
    if(name.length==0){
        seterror('name','*length of name cannot be zero.');
        returnvalue=false;
    }

    let email=document.forms['myForm']['femail'].value;
    if(email.length>15){
        seterror('email','*email length is too long.');
        returnvalue=false;
    }

    let phone=document.forms['myForm']['fphone'].value;
    if(phone.length!=10){
        seterror('phone','*phone number should be 10 digits.');
        returnvalue=false;
    }


    let password=document.forms['myForm']['fpassword'].value;
    if(password.length<6){
        seterror('password','*password should be atlest 6 digit');
        returnvalue=false;
    }

    let cpassword=document.forms['myForm']['fcpassword'].value;
    if(cpassword!=password){
        seterror('cpassword','*password and confirm password not match');
        returnvalue=false;
    }



    return returnvalue;
}
