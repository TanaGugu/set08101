const BASE_URL = "https://beastybonds-dnbkh3hgf2atcnfg.ukwest-01.azurewebsites.net/api/v1"

document.addEventListener("DOMContentLoaded", async () => {

    const animalCardData = await fetchAllByCategory("monkey")
    const gallery = document.getElementById("gallery")

    animalCardData.forEach(animal => {
    
        const card = document.createElement("div")
        card.className = "card bg-accent-400"

        card.innerHTML = 
        `
            <img src=${animal.img_url} alt="animal image">
            <h3>${animal.name}</h3>
        `

        card.addEventListener("click", () => {
            window.location.href = `monkey-profile.html?id=${animal.id}`
        })

        gallery.appendChild(card)
    })
})

async function fetchAllByCategory(category) {
    const res = await fetch(`${BASE_URL}/animals?category=${category}`)
    if (!res.ok) throw new Error("Bad response");
    return res.json()
}