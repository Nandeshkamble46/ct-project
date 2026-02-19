// Login Validation
document.querySelector("#loginForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.querySelector("#loginEmail").value.trim();
    const password = document.querySelector("#loginPassword").value.trim();

    if (!email || !password) {
        alert("Please fill in all fields");
    } else {
        alert("Login successful (demo only)");
    }
});

// Signup Validation
document.querySelector("#signupForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.querySelector("#signupName").value.trim();
    const email = document.querySelector("#signupEmail").value.trim();
    const password = document.querySelector("#signupPassword").value.trim();
    const confirmPassword = document.querySelector("#signupConfirmPassword").value.trim();

    if (!name || !email || !password || !confirmPassword) {
        alert("Please fill in all fields");
    } else if (password !== confirmPassword) {
        alert("Passwords do not match");
    } else {
        alert("Signup successful (demo only)");
    }
});