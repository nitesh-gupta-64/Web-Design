function generateTable() {
    var number = parseInt(document.getElementById("number").value);
    var tableHTML = "<h3>Multiplication Table for " + number + "</h3><table>";

    for (var i = 1; i <= 10; i++) {
        tableHTML += "<tr><td>" + number + " * " + i + "</td><td>=</td><td>" + (number * i) + "</td></tr>";
        
    }

    tableHTML += "</table>";
    document.getElementById("table").innerHTML = tableHTML;
}