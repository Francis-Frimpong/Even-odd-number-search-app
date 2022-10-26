const formField = document.querySelector(".form-field");
const inputField = document.querySelector("#input-field");
const evenNumBtn = document.querySelector(".even-num-btn");
const oddNumBtn = document.querySelector(".odd-num-btn");
const clearBtn = document.querySelector(".clear-field-btn");
const  results= document.querySelector(".results");




//creating eventlisteners on both even and odd numbers button
evenNumBtn.addEventListener('click', (e)=>{
    e.preventDefault("formField");
    findEvenNumbers();
    clear()
    
    
})

oddNumBtn.addEventListener('click', (e)=>{
    e.preventDefault("formField");
    findOddNumbers();
    clear()
    
})



let clear = () => formField.reset();


//function to find the even numbers
let findEvenNumbers = () => {
    let strNum = inputField.value;
    let splitStr = Array.from(String(strNum),Number);
    let getEvenNumbers = splitStr.filter(number => number % 2 === 0);
    results.textContent = ` The even numbers are: ${getEvenNumbers}`;
     
            
}

//function to find the odd numbers
let findOddNumbers = () => {
    let strNum = inputField.value;
    let splitStr = Array.from(String(strNum),Number);
    let getOddNumbers = splitStr.filter(number => number % 2 !== 0);
    results.textContent = ` The odd numbers are: ${getOddNumbers}`; 
    

}









