// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    console.log("Username entered:", username);
    console.log("Password entered:", password);

    // Basic validation for demonstration purposes
    if (username === '' || password === '') {
        errorMessage.textContent = 'Both fields are required!';
    } else if (username === 'emmanuelvaldellon@user.com' && password === '123') {
        console.log("Login successful, redirecting to dashboard.html");
        // Redirect to the dashboard page upon successful login
        window.location.href = 'dashboard.html';
    } else {
        errorMessage.textContent = 'Invalid username or password!';
    }
    
    // Basic validation for demonstration purposes
if (username === '' || password === '') {
    errorMessage.textContent = 'Both fields are required!';
} else if (username === 'bettaace@admin.com' && password === '123') {
    console.log("Login successful, redirecting to admin.html");
    // Redirect to the dashboard page upon successful login
    window.location.href = 'admin.html';
} else {
    errorMessage.textContent = 'Invalid username or password!';
}
});


// Handle sign-up form submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;
    const signupErrorMessage = document.getElementById('signupErrorMessage');

    console.log("Sign-up username entered:", username);
    console.log("Sign-up password entered:", password);
    console.log("Sign-up confirm password entered:", confirmPassword);

    // Basic validation for demonstration purposes
    if (username === '' || password === '' || confirmPassword === '') {
        signupErrorMessage.textContent = 'All fields are required!';
    } else if (password !== confirmPassword) {
        signupErrorMessage.textContent = 'Passwords do not match!';
    } else {
        signupErrorMessage.textContent = '';
        console.log("Sign-up successful, redirecting to login.html");
        // Redirect to the login page upon successful sign-up
        window.location.href = 'register.html';
    }
});
