function calculateDaysRemaining() {
    var birthdate = new Date(document.getElementById("birthdate").value);
    var today = new Date();
    
    birthdate.setFullYear(today.getFullYear());

    if (birthdate < today) {
        birthdate.setFullYear(today.getFullYear() + 1);
    }

    var oneDay = 1000 * 60 * 60 * 24;
    var daysRemaining = Math.ceil((birthdate.getTime() - today.getTime()) / oneDay);

    document.getElementById("result").innerHTML = "Days remaining until your next birthday: " + daysRemaining;
}