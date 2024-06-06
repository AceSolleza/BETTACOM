function showContent(contentId) {
    var contents = document.getElementsByClassName("content");
    for (var i = 0; i < contents.length; i++) {
        if (contents[i].id === contentId) {
            contents[i].style.display = "block";
        } else {
            contents[i].style.display = "none";
        }
    }

    var links = document.getElementsByTagName("a");
    for (var j = 0; j < links.length; j++) {
        links[j].classList.remove("active");
    }
    document.querySelector('a[href="#' + contentId + '"]').classList.add("active");
}
// Get the logout button
const logoutBtn = document.getElementById('logout-btn');

// Add click event listener to the logout button
logoutBtn.addEventListener('click', function() {
    // Redirect to the login form
    window.location.href = 'register.html';
});
