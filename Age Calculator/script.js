
function calculateAge() {
    var birthdate = document.getElementById('birthdate').value;
    if (!birthdate) {
        alert("Please enter your DOB");
        return;
    }
    var today = new Date();
    var birthdateObj = new Date(birthdate);
    if (birthdateObj >= today) {
        alert("Invalid DOB. Please enter a date in the past.");
        return;
    }
    var age = today.getFullYear() - birthdateObj.getFullYear();
    var monthDiff = today.getMonth() - birthdateObj.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdateObj.getDate())) {
        age--;
    }
    document.getElementById('result').innerHTML = "Your age is: " + age + " years.";
}
