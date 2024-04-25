function calculateCelsius() {
    var cel = document.getElementsByName('celsius')[0].value;
    var out = parseFloat(cel) * 9 / 5 + 32;
    
    document.getElementsByName('fahrenheit')[0].value= out;
    
    }

function Reverse() {
    var fah = document.getElementsByName('fahrenheit')[0].value;
    var out = (parseFloat(fah)-32) *5/9;
    
    document.getElementsByName('celsius')[0].value= out;
}