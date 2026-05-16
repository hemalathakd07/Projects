// script.js

function checkURL() {

    let url = document.getElementById("urlInput").value;
    let result = document.getElementById("result");

    let suspiciousWords = ["login", "verify", "bank", "free", "bonus"];

    let riskScore = 0;

    // checking for http instead of https
    if (url.includes("http://")) {
        riskScore += 2;
    }

    // checking suspicious symbols
    if (url.includes("@") || url.includes("-")) {
        riskScore += 1;
    }

    // checking suspicious keywords
    suspiciousWords.forEach(word => {

        if (url.includes(word)) {
            riskScore += 1;
        }

    });

    // showing result
    if (riskScore >= 4) {

        result.innerHTML = "&#9888; Dangerous URL";
        result.style.color = "red";

    }

    else if (riskScore >= 2) {

        result.innerHTML = "&#9888; Suspicious URL";
        result.style.color = "orange";

    }

    else {

        result.innerHTML = "&#9989; Safe URL";
        result.style.color = "lightgreen";

    }
}