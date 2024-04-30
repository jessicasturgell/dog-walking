import { getWalkers, getCities } from "./database.js"

const walkers = getWalkers()
const cities = getCities()

document.addEventListener(
    "click",
    (clickEvent) => {
        const whatWasClicked = clickEvent.target
        const cityId = whatWasClicked.dataset.cityforeignkey

        if (whatWasClicked.dataset.type === "walker") {
            for (const city of cities) {
                for (const walker of walkers) {
                    if (parseInt(cityId) === city.id) {
                    window.alert(`This walker works in ${city.name}`)
                    break;
                    }
                }
            }
        }
    }
)

export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li data-id="${walker.id}"
                            data-cityforeignkey="${walker.cityId}"
                            data-type="walker"
                            >${walker.name}
                        </li>`
    }

    walkerHTML += "</ul>"
    return walkerHTML
}

