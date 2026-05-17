function cipher(text, shift, decrypt = false) {
    let result = "";

    if (decrypt) {
        shift = -shift;
    }

    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        if (char.match(/[a-z]/i)) {
            let code = text.charCodeAt(i);

            let base = code >= 65 && code <= 90 ? 65 : 97;

            char = String.fromCharCode(
                ((code - base + shift + 26) % 26) + base
            );
        }

        result += char;
    }

    return result;
}

function encrypt() {
    const text = document.getElementById("message").value;
    const shift = parseInt(document.getElementById("shift").value);

    if (isNaN(shift)) {
        alert("Please enter a valid shift value");
        return;
    }

    document.getElementById("result").innerText =
        cipher(text, shift);
}

function decrypt() {
    const text = document.getElementById("message").value;
    const shift = parseInt(document.getElementById("shift").value);

    if (isNaN(shift)) {
        alert("Please enter a valid shift value");
        return;
    }

    document.getElementById("result").innerText =
        cipher(text, shift, true);
}