// selector :
let productName = document.querySelector(".form-create input[name='product-name']");
let price = document.querySelectorAll(".price .price-inpute input");
let total = document.querySelector(".price .total span");
let countElement = document.querySelector(".form-create input[name='count']");
let category = document.querySelector(".form-create input[name='category']");
let AllBtnForm = document.querySelectorAll(".form-create input");
let creatBtn = document.querySelector(".form-create button");
let table = document.querySelector("table tbody");
// seting :
let conterId = 0;

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
// حل المشكلة هي ازالة اقواس الدالة 
creatBtn.addEventListener("click",setProduct);

// get and set Data from inpute :
function setProduct(){

    count = countElement.value  ? +countElement.value  :  1 ;

    if(productName.value && price[0].value > 0 ){

        for(let i = 0 ; count > i ; i++){
            // set value in Object :
            let values = {
                id : conterId ,
                title : productName.value,
                prix : price[0].value ,
                tax : price[1].value ? price[1].value : 0,
                ads : price[2].value ? price[2].value : 0,
                discount : price[3].value ? price[3].value : 0,
                prixTotal : total.innerHTML,
                categ : category.value ? category.value : "Unckone",
                delet : "<button class = 'delete' >Delete</button>",
                update : "<button class = 'update' >Update</button>",
            }

            // set Data in Page :
            let column = document.createElement("tr");
            for(let j in values){

                let td = document.createElement("td");
                td.innerHTML = values[j] ;
                column.appendChild(td);
            }
            table.appendChild(column);
            //////

            conterId++;

        }
    }
    emptyForm();
    deletColumn();
}

// Empty Inpute :
function emptyForm(){
    AllBtnForm.forEach((e)=>{
        e.value = "" ;
    })
    total.innerHTML = 0 ;
}


// Delete Function :
function deletColumn(){
    console.log("Delete Her");
    document.querySelectorAll("button.delete").forEach((e)=>{
        e.onclick = ()=>{
            e.parentElement.parentElement.remove();
        }
    })
}

// Update :



// search 


// localstorage :