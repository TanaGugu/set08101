 document.addEventListener("DOMContentLoaded", async () => {

    const animalCardData = await fetchAnimalsByCategory()
    const cardContainer = document.getElementById("gallery-grid")

    animalCardData.forEach(animal => {
    
        const card = document.createElement("div")
        card.classList.add("gallery-item")

        if (animal.status === 'ADOPTED') {
            
        }
        card.innerHTML = 
        `
            <h1>${animal.name}</h1>
            <img src=${animal.img_url} alt="animal image">


        `
        cardContainer.appendChild(card)
    })
})

async function fetchAnimalsByCategory(){
    try{
        // const category = document.getElementById("category").value.toLowerCase()
        const category = "mammal"
        const response = await fetch(`http://localhost:8080/api/v1/animals?category=${category}`)
    
        if (!response.ok){
            throw new Error("Somethdifsds")
        }

        const animals = await response.json()
        return animals

    }catch(error){
        console.error(error)
    }
}