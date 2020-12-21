//https://api.apify.com/v2/key-value-stores/lFItbkoNDXKeSWBBA/records/LATEST?disableRedirect=true

const axios = require('axios').default

const inf = document.getElementById('infected')
const phi = document.getElementById('PHI')
const rev = document.getElementById('recovered')
const dead = document.getElementById('deceased')
const ac = document.getElementById('activeCases')
const source = document.getElementById('source')
const unique = document.getElementById('unique')
const test = document.getElementById('tested')
function PHI(){
    axios.get('https://api.apify.com/v2/key-value-stores/lFItbkoNDXKeSWBBA/records/LATEST?disableRedirect=true')
    .then(data => {
        setInterval(
            inf.innerHTML = data.data.infected,
            phi.innerHTML = data.data.country,
            rev.innerHTML = data.data.recovered,
            dead.innerHTML = data.data.deceased,
            ac.innerHTML = data.data.activeCases,
            unique.innerHTML = data.data.unique,
            test.innerHTML = data.data.tested,
            30000
        )
        source.innerHTML = "Source: "  + data.data.sourceUrl
    })
}

PHI();

