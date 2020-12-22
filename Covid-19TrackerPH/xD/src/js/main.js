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
        setInterval(() => {
            infec
            revs
            dead
            acs
            uniques
            tests
        }, 30000);

        inf.innerHTML = infec.toLocaleString('en')
        rev.innerHTML = revs.toLocaleString('en')
        dead.innerHTML = deads.toLocaleString('en')
        ac.innerHTML = acs.toLocaleString('en')
        unique.innerHTML = uniques.toLocaleString('en')
        test.innerHTML = tests.toLocaleString('en')
        source.innerHTML = "Source: "  + data.data.sourceUrl
    })
}

PHI();

