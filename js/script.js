const CORRECT_PASSWORD = "schulname1997"; // Hier Ihr Wunschpasswort eintragen

function checkPassword() {
    const userInput = document.getElementById("password-input").value;
    const errorMsg = document.getElementById("error-msg");
    
    if (userInput === CORRECT_PASSWORD) {
        document.getElementById("login-box").classList.add("hidden");
        document.getElementById("content-box").classList.remove("hidden");
    } else {
        errorMsg.classList.remove("hidden");
    }
}

// Erlaubt das Abschicken mit der Enter-Taste
document.getElementById("password-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") { 
        checkPassword(); 
    }
});
