const BASE_URL = "https://beastybonds-dnbkh3hgf2atcnfg.ukwest-01.azurewebsites.net/api/v1";

document.addEventListener("DOMContentLoaded", async () => {

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (!id) return showError("Animal Id is not provided in the URL");

    try {
        const animal = await fetchById(id);
        renderProfile(animal);
    } catch (err) {
        showError("Couldn’t load profile");
        console.error(err);
    }
});

async function fetchById(id) {
    const res = await fetch(`${BASE_URL}/animals/${id}`);
    if (!res.ok) throw new Error("Bad response");
    return res.json();
}

function renderProfile(a) {

    const profile = document.getElementById("profile");
    profile.innerHTML =
        `
            <div class="profile-column">
                <img src="${a.img_url}" alt="${a.name}">
            </div>
            <div class="profile-column">
                <h1 class="fs-primary-heading | fw-bold">${a.name}</h1>
                <ul class="info-list | bg-accent-100 | text-neutral-100" role="list">
                    <li>Sex<br>${a.sex}</li>
                    <li>Breed<br>${a.breed}</li>
                    <li>Size<br>${a.size}</li>
                    <li>Age<br>${a.age_in_month} months</li>
                </ul>
                <div class="profile-description">
                    <p>${a.description}</p>
                </div>
                <button class="button">Adopt ${a.name}</button>
            </div>
        `
}

function showError(msg) {
    document.getElementById("profile").innerHTML = `<p>${msg}</p>`;
}

document.getElementById("back-btn").addEventListener("click", (e) => {
    e.preventDefault();
    if (window.history.length > 1) {
        history.back();
    } else {
        window.location.href = "monkey.html";
    }
});
