import { getWalkers } from "./database.js"

const walkers = getWalkers()

document.addEventListener(
    "click",
    (clickEvent) => {
        const cityTarget = clickEvent.target

        if (cityTarget.dataset.type === "city") {

        window.alert(`${cityTarget.dataset.walkername} is servicing this city.`)
        }
    }
)

export const CityList = () => {
    let citiesHTML = "<ul>"

    for (const walker of walkers) {
        citiesHTML += `<li data-type="city" data-walkername="${walker.name}">${walker.city}</li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

