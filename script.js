// Smooth scroll to section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}
document.getElementById("subscriptionForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const message = document.getElementById("message");

    if (email) {
        message.textContent = Thank you for subscribing, ${email}!;
        message.style.color = "green";
        document.getElementById("email").value = "";  // Clear the input field
    } else {
        message.textContent = "Please enter a valid email address.";
        message.style.color = "red";
    }
});