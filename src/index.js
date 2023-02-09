import "./style.scss";
const button = document.querySelector(".main__card-button")
const advice = document.querySelector('.main__card-advice')
const id = document.querySelector('.main__card-id')
const URL = "https://api.adviceslip.com/advice"

button.addEventListener('click', async () => {
    button.disabled = true
    advice.textContent = ". . . "
    id.textContent="..."
    const response = await fetch(URL)
    const json = await response.json()
    const { slip } = json
    id.textContent = slip.id
    advice.textContent = `"${slip.advice}"`
    button.disabled = false
})