const detailButtons = document.querySelectorAll(".details-btn");

detailButtons.forEach(button => {
    button.addEventListener("click", () => {
        const details = button.nextElementSibling;

        if (details.style.display === "none") {
            details.style.display = "block";
            button.textContent = "Hide Details";
        } else {
            details.style.display = "none";
            button.textContent = "Show Details";
        }
    });
});

// Dark Mode Toggle

const themeBtn = document.getElementById("theme-toggle");

// Check saved theme
if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode");
    themeBtn.textContent = "☀️";
}

// Toggle theme
themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        themeBtn.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    }else{
        themeBtn.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }

});

// Search Events

const searchInput = document.getElementById("searchInput");

if(searchInput){

    searchInput.addEventListener("keyup", function(){

        const filter = searchInput.value.toLowerCase();

        const cards = document.querySelectorAll(".event-card");

        cards.forEach(card =>{

            const title = card.querySelector("h3").textContent.toLowerCase();

            if(title.includes(filter)){
                card.style.display = "block";
            }else{
                card.style.display = "none";
            }

        });

    });

}

// Scroll To Top

const topBtn = document.getElementById("topBtn");

if(topBtn){

    window.addEventListener("scroll", () => {

        if(window.scrollY > 50){
            topBtn.style.display = "block";
        }else{
            topBtn.style.display = "none";
        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });

}

// Category Filter

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        document.querySelector(".active-filter")?.classList.remove("active-filter");

        button.classList.add("active-filter");

        const filter = button.dataset.filter;

        document.querySelectorAll(".event-card").forEach(card => {

            if(filter === "all" || card.dataset.category === filter){
                card.style.display = "block";
            }else{
                card.style.display = "none";
            }

        });

    });

});