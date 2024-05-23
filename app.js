document.getElementById("login-form").addEventListener("submit", function(event){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // You can implement your login logic here, for demo purposes I'm just showing an error message
    if(username === "user" && password === "password") {
        alert("Login successful!");
    } else {
        document.getElementById("error-message").innerText = "Invalid username or password.";
    }
});
function redirectToAnotherPage() {
    // Replace 'target_page.html' with the URL of the page you want to redirect to
    window.location.href = 'index2.html';
}