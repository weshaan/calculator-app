const display=document.getElementById("display");
let a=0;
function appendToDisplay(input){ 
    if(input=='%'){
        input='';
        display.value/=100;
    }
    if(input=='s'){
        if(a%2==0){
            input='-';
            }
        else{
            input='';
            const lastIndex = display.value.lastIndexOf('-');
            display.value=display.value.slice(0, lastIndex) +
            "+" +
            display.value.slice(lastIndex + 1);
            }a++;
    }
    console.log(a);
    if(input!='-')
        a=0;
    display.value+=input;
}

function clearScreen(){
    display.value="";
}

function calculate(){
    try{
        display.value=eval(display.value);
    }catch(error){
        display.value="Syntax Error";
    }
}