const BASE_URL = "https://beastybonds-dnbkh3hgf2atcnfg.ukwest-01.azurewebsites.net/api/v1"

document.addEventListener("DOMContentLoaded", async () => {

    const animalCardData = await fetchAllByCategory("monkey")
    const cardContainer = document.getElementById("gallery")

    animalCardData.forEach(animal => {
    
        const card = document.createElement("div")
        card.clasName = "card bg-accent-400"

        card.innerHTML = 
        `
            <img src=${animal.img_url} alt="animal image">
            <h3>${animal.name}</h3>
        `
        cardContainer.appendChild(card)
    })
})

async function fetchAllByCategory(category) {
    try{
        const response = await fetch(`${BASE_URL}/animals?category=${category}`)
        if (!response.ok){
            throw new Error("Pizdec Tovarishi!")
        }
        return await response.json()
    }catch(error){
        console.error(error)
    }
}