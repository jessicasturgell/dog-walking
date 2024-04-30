import { getWalkers } from "./database.js"
import { getCities } from "./database.js"

const walkers = getWalkers()
const cities = getCities()

document.addEventListener(
    "click",
    (clickEvent) => {
        const cityTarget = clickEvent.target
        const cityId = cityTarget.dataset.cityforeignkey

        const walkerNames = []

        if (cityTarget.dataset.type === "city") {
            for (const walker of walkers) {
                if (walker.cityId === parseInt(cityId)) {
                    walkerNames.push(walker.name)
                }
            }
            if (walkerNames.length > 0) {
                window.alert(`${walkerNames.join(', ')} is servicing this city.`)
            } else {
                window.alert("No walkers are servicing this city.")
            }
        }
    }
)

export const CityList = () => {
    let citiesHTML = "<ul>"

    for (const city of cities) {            
        let cityAdded = false
        
        for (const walker of walkers)  {

            if (walker.cityId === city.id) {
                if (!cityAdded) {
                citiesHTML += `<li data-type="city" data-cityforeignkey="${walker.cityId}" data-walkername="${walker.name}">${city.name}</li>`
                cityAdded = true
                }
            }
        }
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

