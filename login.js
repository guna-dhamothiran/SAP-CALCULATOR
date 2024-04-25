const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const errorMessages = document.querySelectorAll(".error-message");
const logoutBtn = document.getElementById("logoutBtn");

// Check if user is logged in
const isLoggedIn = localStorage.getItem("isLoggedIn");

if (isLoggedIn) {
    // Hide login form and show logout button
    form.style.display = "none";
    logoutBtn.style.display = "block";
} else {
    // Show login form and hide logout button
    form.style.display = "block";
    logoutBtn.style.display = "none";
}

// Login form submission
form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
});

// Logout button click event
logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("isLoggedIn");
    location.reload(); // Reload the page
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if (usernameValue === "") {
        setError(username, "Username cannot be blank");
    } else {
        setSuccess(username);
    }

    if (passwordValue === "") {
        setError(password, "Password cannot be blank");
    } else if (passwordValue.length < 5) {
        setError(password, "Password is too short");
    } else {
        setSuccess(password);
        // Simulate authentication (for demonstration purposes)
        simulateAuthentication();
    }
}

function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

function setError(input, msg) {
    const formControl = input.parentElement;
    const small = formControl.querySelector(".error-message");
    small.innerText = msg;
    formControl.className = "form-control error";
}

function setSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function simulateAuthentication() {
    // Simulate authentication (for demonstration purposes)
    // In a real application, this would involve sending a request to the server
    // and checking if the username and password are valid
    localStorage.setItem("isLoggedIn", true);
    location.reload(); // Reload the page
}
