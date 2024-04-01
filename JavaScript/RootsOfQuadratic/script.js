
function calculate() {
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var c = parseFloat(document.getElementById("c").value);
    var result = (b*b)-(4*a*c);

    if(result<0) {
       var x = "Roots are imaginary" 
    }
    else if(result==0) {
        x = "Roots are real and equal" 
    }
    else {
        x = "Roots are real and distinct"
    }

    document.getElementById("result").innerHTML = "Electricity Bill: " + x;
}