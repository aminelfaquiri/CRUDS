// selector :

let productName = document.querySelector(".form-create input[name='product-name']");
let price = document.querySelectorAll(".price .price-inpute input");
let total = document.querySelector(".price .total span");
let countElement = document.querySelector(".form-create input[name='count']");
let category = document.querySelector(".form-create input[name='category']");
let creatBtn = document.querySelector(".form-create button")


// funtion total calc :

Array.from(price).forEach(e => {

    e.addEventListener("blur",CalcTotal)

});


// Auto Total Calc :
// عمل ريست للقيمة كان هو حل المشكلة ضع هذا الأمر دائما في الحسبان 
function CalcTotal(){

    total.innerHTML = "0" ;
    for(let j in Array.from(price) ){

        total.innerHTML  =  +total.innerHTML + +Array.from(price)[j].value;

    }
    
    if(price[0].value && price[1].value && price[2].value){
        total.parentElement.style.backgroundColor = "#4caf50";
    }
}

//  Set Product in Table :
// حل المشكلة هي ازالة اقوال الدالة 
creatBtn.addEventListener("click",setProduct);
    
// get and set Data from inpute :
function setProduct(){

    count = countElement.value  ? +countElement.value  :  1 ;

    if(productName.value && total.innerHTML > 0 ){
        for(let i = 0 ; count > i ; i++){
            console.log(`Name  => ${productName.value}`);
            console.log(`Price => ${total.innerHTML}`);
            console.log(`Category => ${category.value}`);
            console.log(`#############################`);
        }
    }

}
