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
    } else if (username === 'Ace Solleza' && password === 'Sollezaace') {
        errorMessage.textContent = '';
        console.log("Login successful, redirecting to dashboard.html");
        // Redirect to the dashboard page upon successful login
        window.location.href = 'dashboard.html';
    } else {
        errorMessage.textContent = 'Invalid username or password!';
    }
});
