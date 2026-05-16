function checkPassword() {

    let password = document.getElementById("password").value;
    let result = document.getElementById("result");

    let score = 0;

    // length check
    if (password.length >= 8) score++;

    // uppercase
    if (/[A-Z]/.test(password)) score++;

    // lowercase
    if (/[a-z]/.test(password)) score++;

    // numbers
    if (/[0-9]/.test(password)) score++;

    // special characters
    if (/[@$!%*?&]/.test(password)) score++;

    // result logic
    if (score <= 2) {
        result.innerHTML = "Weak Password";
        result.style.color = "red";
    }
    else if (score <= 4) {
        result.innerHTML = "Medium Password";
        result.style.color = "yellow";
    }
    else {
        result.innerHTML = "Strong Password";
        result.style.color = "lightgreen";
    }
}