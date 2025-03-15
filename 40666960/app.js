
document.addEventListener("DOMContentLoaded", () => {
    const cardData = [
        { name: "Suzie", img: "imgs/portrait-long-tailed-macaque.jpg" },
        { name: "Max", img: "imgs/bonnet-macaque-sitting-railing-holding-green-coconut.jpg" },
        { name: "Luna", img: "imgs/cute-young-capuchin-monkey-eating-yellow-fruit-looking-side.jpg" },
        { name: "Bella", img: "imgs/monkey-sitting-wooden-fence (1).jpg" },
        { name: "Suzie", img: "imgs/portrait-long-tailed-macaque.jpg" },
        { name: "Max", img: "imgs/bonnet-macaque-sitting-railing-holding-green-coconut.jpg" },
        { name: "Luna", img: "imgs/cute-young-capuchin-monkey-eating-yellow-fruit-looking-side.jpg" },
        { name: "Bella", img: "imgs/monkey-sitting-wooden-fence (1).jpg" }
    ];

    const cardContainer = document.getElementById("cardContainer");

    cardData.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("profile-card");
        card.innerHTML = `
            <h2 class="card-header">${item.name}</h2>
            <img src="${item.img}" alt="${item.name}" class="card-image">
        `;

        cardContainer.appendChild(card);
    });
});
