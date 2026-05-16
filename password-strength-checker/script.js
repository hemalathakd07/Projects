function checkPassword() {

    let password = document.getElementById("password").value;

    let result = document.getElementById("result");

    let score = 0;

    // checking password length
    if (password.length >= 8) {
        score++;
    }

    // checking uppercase letters
    if (/[A-Z]/.test(password)) {
        score++;
    }

    // checking lowercase letters
    if (/[a-z]/.test(password)) {
        score++;
    }

    // checking numbers
    if (/[0-9]/.test(password)) {
        score++;
    }

    // checking special characters
    if (/[@$!%*?&]/.test(password)) {
        score++;
    }

    // displaying result
    if (score <= 2) {

        result.innerHTML = "Weak Password";
        result.style.color = "red";

    }

    else if (score <= 4) {

        result.innerHTML = "Medium Password";
        result.style.color = "orange";

    }

    else {

        result.innerHTML = "Strong Password";
        result.style.color = "lightgreen";

    }
}