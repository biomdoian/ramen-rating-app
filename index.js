const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "images/shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "images/miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "images/tonkotsu.jpg" },
    { id: 4, name: "Spicy Ramen", restaurant: "Spicy House", image: "images/spicy.jpg", rating: 4, comment: "Very Spicy!" }
];
function displayRamens() {
    const ramenMenu = document.getElementById("ramen-menu");
    ramenMenu.innerHTML = ''; 
    ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.dataset.ramenId = ramen.id;
        img.addEventListener("click", handleClick);
        ramenMenu.appendChild(img);
    });
}

function handleClick(event) {
    const ramenId = parseInt(event.target.dataset.ramenId);
    const selectedRamen = ramens.find(ramen => ramen.id === ramenId);
    const ramenDetail = document.getElementById("ramen-detail");
    if (selectedRamen) {
        ramenDetail.innerHTML = `
            <h2>${selectedRamen.name}</h2>
            <p>Restaurant: ${selectedRamen.restaurant}</p>
            ${selectedRamen.rating ? `<p>Rating: ${selectedRamen.rating}</p>` : ''}
            ${selectedRamen.comment ? `<p>Comment: ${selectedRamen.comment}</p>` : ''}
        `;
    }
}

function addSubmitListener() {
    const form = document.getElementById("new-ramen-form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const newRamen = {
            id: ramens.length + 1,
            name: document.getElementById("name").value,
            restaurant: document.getElementById("restaurant").value,
            image: document.getElementById("image").value,
            rating: parseInt(document.getElementById("rating").value),
            comment: document.getElementById("comment").value
        };
        ramens.push(newRamen);
        displayRamens();
        form.reset();
    });
}

function main() {
    displayRamens();
    addSubmitListener();
}

document.addEventListener("DOMContentLoaded", main);