const defaultValue = 90;
let userInput = defaultValue;
let result;
result = userInput + 18;
result = result - 1;
result = result * 10;
result = result / 5;
if(result == defaultValue){
    alert('Not Changed');
}else{
    alert('Changed');
}
alert(result);
alert(userInput);