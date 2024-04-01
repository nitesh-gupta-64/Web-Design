
function calculate() {
    var unit = parseFloat(document.getElementById("unit").value);
    result = 0;
    if(unit<200) {
        result = (1.2)*unit;
    }
    else if(unit<400) {
        result = (1.5)*unit;
    }
    else if(unit<600) {
        result = (1.8)*unit;
    }
    else {
        result = (2)*unit;
    }

    if(result>400) {
        result += result * 0.15; 
    }

    if(result<100) {
        result = 100;
    }

    document.getElementById("result").innerHTML = "Electricity Bill: " + result;
}