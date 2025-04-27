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
    const root = document.getElementById("profile");
    root.innerHTML = `
    <h1 class="fs-primary-heading fw-bold">${a.name}</h1>
    <img src="${a.img_url}" alt="${a.name}" style="max-width:25rem">
    <ul class="flow">
      <li><strong>Sex:</strong> ${a.sex}</li>
      <li><strong>Breed:</strong> ${a.breed}</li>
      <li><strong>Size:</strong> ${a.size}</li>
      <li><strong>Age :</strong> ${a.age_in_month} + month</li>
    </ul>
    <p>${a.description}</p>
    <p>${a.contact_info}</p>
    <button class="button">Adopt ${a.name}</button>
  `;
}

function showError(msg) {
    document.getElementById("profile").innerHTML = `<p>${msg}</p>`;
}
