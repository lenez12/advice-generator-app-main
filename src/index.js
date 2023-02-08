import "./style.scss";
const button = document.querySelector(".main__card-button")
const advice = document.querySelector('.main__card-advice')
const id = document.querySelector('.main__card-id')
const URL = "https://api.adviceslip.com/advice"
button.addEventListener('click', async () => {
    button.disabled = true
    advice.innerHTML = "Loading . . . "
    const response = await fetch(URL)
    const json = await response.json()
    const { slip } = json
    id.innerHTML = slip.id
    advice.innerHTML = `" ${slip.advice} "`
    button.disabled = false
  
})