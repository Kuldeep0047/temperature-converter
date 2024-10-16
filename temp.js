
const textBox = document.getElementById("textbox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const Result = document.getElementById("Result");

let temp;



function convert(){

    if(toFahrenheit.checked){

       temp = Number(textBox.value);
       temp= temp * 9 / 5 + 32 ;
       Result.textContent = temp.toFixed(1) +"°F";
    }
    

    else if(toCelsius.checked){
        temp = Number(textBox.value);
        temp= (temp - 32) * (5/9);
        Result.textContent = temp.toFixed(1) + "°c";
     }

        
    
    

    else{
        Result.textContent="Select a Unit";
    }

}