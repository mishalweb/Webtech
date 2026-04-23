// Simple front-end validation
function validateForm() {
    let email = document.forms["loginForm"]["email"].value;
    let password = document.forms["loginForm"]["password"].value;

    if (email == "" || password == "") {
        alert("Please fill all fields!");
        return false;
    }

    return true;
}