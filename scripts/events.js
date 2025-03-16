document.addEventListener("DOMContentLoaded", function () {
    const events = [
        {
            id: 1,
            title: "Women in Tech Workshop",
            description: "Join us for an interactive workshop on career advancement in tech.",
            date: "2025-03-27",
            location: "Virtual Meeting",
            image: "tech-event.jpg" 
        },
        {
            id: 2,
            title: "Tech Startup Networking Event",
            description: "Connect with fellow entrepreneurs and potential investors in the tech industry.",
            date: "2025-03-25",
            location: "Innovation Hub",
            image: "networking-event.jpg" 
        }
    ];

    function displayEvents() {
        const eventsList = document.getElementById("eventsList");
        eventsList.innerHTML = events.map(event => `
            <div class="col-md-6 event-card">
                <div class="card">
                    <img src="assets/${event.image}" alt="${event.title}">
                    <div class="event-content">
                        <h5 class="event-title">${event.title}</h5>
                        <p class="event-description">${event.description}</p>
                        <p><strong>Date:</strong> ${event.date}</p>
                        <p><strong>Location:</strong> ${event.location}</p>
                        <button class="btn join-btn">Join Event</button>
                    </div>
                </div>
            </div>
        `).join('');

        // Add animation after a short delay
        setTimeout(() => {
            document.querySelector(".event-list").style.opacity = "1";
            document.querySelector(".event-list").style.transform = "translateY(0)";
            document.querySelectorAll(".event-card").forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = "1";
                    card.style.transform = "translateY(0)";
                }, index * 150); // Staggered effect
            });
        }, 200);
    }

    displayEvents();
});
