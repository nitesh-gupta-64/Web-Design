
function calculate() {
    var year = parseFloat(document.getElementById("year").value);
    if(year%4 == 0) {
        var x = " is a leap year";
    }
    else {
        var x = " is not a leap year";
    }

    document.getElementById("result").innerHTML = year + x;
}