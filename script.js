//Время в формате HH.MM.SS сделаю позже. То есть в случае, если значение
//времени [0,10) => буду добавлять 0(ноль) перед цифрами.
//Сейчас: 14:1:3, будет 14:01:03. Аналогично с датой.


const selectElement = document.querySelector("#select-country")
const optionElement = document.querySelector("option")
const countryDate = document.querySelector('.country-date')

let timerId; //переменная отвечает за остановку setInterval()


const map = new Map()
map.set("London", 1);
map.set("Moscow", 3);
map.set("Tokio", 9);
map.set("Beijing", 8);

countryInformation("Moscow", 3) //по умолчанию москва

selectElement.addEventListener("change", handleClick)

function handleClick() {

    clearInterval(timerId)
    const country = selectElement.value
    const utc = map.get(country)
    countryInformation(country, utc)

}

function countryInformation(country, utc) {

    timerId = setInterval(() => {
        let date = new Date()
        let day = date.getDate()
        let month = new Date().toLocaleString('ru', { month: 'long' });
        let time = `${date.getUTCHours()+utc}:${date.getMinutes()}:${date.getSeconds()}`;
        let result = `${country} ${month} ${day} ${time}`
        countryDate.innerHTML = `<p>${result}</p>`
    }, 1000)

}