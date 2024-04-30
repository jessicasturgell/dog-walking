import { getPets, getWalkers, getCities } from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()
const cities = getCities()


// Function whose responsibility is to find the walker assigned to a pet
const findWalker = (pet, allWalkers) => {
    let petWalker = null

    for (const walker of allWalkers) {
        if (walker.id === pet.walkerId) {
            petWalker = walker
        }
    }

    return petWalker
}

export const Assignments = () => {
    let assignmentHTML = "<ul>"

    for (const currentPet of pets) {
        const currentPetWalker = findWalker(currentPet, walkers)
        const cityOfWalker = cities.find(city => city.id === currentPetWalker.cityId);
        if (cityOfWalker) {
        
        assignmentHTML += `
            <li data-cityforeignkey="${cityOfWalker.id}">
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${cityOfWalker.name}
            </li>
        `
        }
    }
    assignmentHTML += "</ul>"

    return assignmentHTML
}

