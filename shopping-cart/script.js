function increament(pera,pri,ite){
    let count=document.querySelector('#'+pera);
    let price=document.querySelector('#'+pri);
    let item=document.querySelector('#'+ite);
    let pr_amount=document.querySelector('#pr_amount');

    let charge=document.querySelector('#charge');
    let total_tk=document.querySelector('#total_tk');
    // console.log (count.value);
    if(count.value >=5){
        count.value=5;
        alert('only select 5 products');
    }else{
        count.value++;
        let result=parseInt(price.innerHTML)+parseInt(item.innerHTML);
        item.innerHTML=result;

        //Product Ammount//

        let total_amount=parseInt(price.innerHTML)+parseInt(pr_amount.innerHTML);
        pr_amount.innerHTML=total_amount;

        //delivery-charge//
        let newresult=total_amount+parseInt(charge.innerHTML);
        total_tk.innerHTML=newresult;

          //kupon//
          let kupon_div=document.querySelector('#kupon_div');
          if(total_tk => 400){
            
             kupon_div.style.display='block';
          }
        
        
    }
}

function decreament(pera,pri,ite){
    let count=document.querySelector('#'+pera);
    let price=document.querySelector('#'+pri);
    let item=document.querySelector('#'+ite);
    if(count.value<=0){
        count.value=0;
        alert('minimum select 1 products');
    }else{
        count.value--;
        let result=parseInt(item.innerHTML)-parseInt(price.innerHTML);
        item.innerHTML=result;

        //Product Ammount//
        
        let total_amount= parseInt(pr_amount.innerHTML)-parseInt(price.innerHTML);
        pr_amount.innerHTML=total_amount;

         //delivery-charge//
         let newresult=parseInt(charge.innerHTML)-total_amount;
         total_tk.innerHTML=newresult;       
        
    }
}

let kupon_div=document.querySelector('#kupon_div');
kupon_div.style.display='none';
let applybtn=document.querySelector('#applybtn');
applybtn.addEventListener('click',function(){

let kupon_input=document.querySelector('#kupon_input');
let total_tk=document.querySelector('#total_tk');
if(kupon_input.value== 'Jui'){
    let total=parseInt(total_tk.innerHTML) - 50;
    total_tk.innerHTML=total;
    alert('congratulation');
    kupon_div.style.display='none';

}else{
    alert('kupon code does not match');
}
   
});