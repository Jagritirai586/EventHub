const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const eventName = document.getElementById("event").value;
    const tickets = document.getElementById("tickets").value;

    if (name === "") {
        alert("Please enter your full name.");
        return;
    }

    if (email === "") {
        alert("Please enter your email.");
        return;
    }

    if (eventName === "") {
        alert("Please select an event.");
        return;
    }

    if (tickets === "" || tickets <= 0) {
        alert("Please enter a valid number of tickets.");
        return;
    }

    const button = bookingForm.querySelector(".btn");

button.textContent = "Booking Confirmed ✓";
button.style.backgroundColor = "green";

document.getElementById("confirmName").textContent = name;
document.getElementById("confirmEvent").textContent = eventName;
document.getElementById("confirmTickets").textContent = tickets;

document.getElementById("successMessage").style.display = "block";
bookingForm.reset();

setTimeout(() => {
    button.textContent = "Book Ticket";
    button.style.backgroundColor = "";
}, 3000);
});

function closeMessage() {
    document.getElementById("successMessage").style.display = "none";
}
<button id="topBtn" title="Go to top">↑</button>