const openBaritems = document.querySelector(".bars");
const headerLeft = document.querySelector(".headerLeft_2");

openBaritems.addEventListener("click", () => {
    // Check the current state of the headerLeft and toggle
    if (headerLeft.style.display === "block") {
        // Hide the header and revert the icon back to bars
        headerLeft.style.display = "none";
        openBaritems.innerHTML = '<i class="fa-solid fa-bars"></i>'; // Original bars icon
    } else {
        // Show the header and change the icon to a cross
        headerLeft.style.display = "block";
        openBaritems.innerHTML = '<i class="fa-solid fa-times"></i>'; // Cross icon
    }
});

document.getElementById('signup-btn').addEventListener('click', function() {
    window.location.href = "signup.html";  // Redirects to login.html
});