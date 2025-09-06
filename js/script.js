let history = []

// heart button function 

function heartButton(id) {
    const heartAmountNumber = parseInt(document.getElementById('heart-amount').innerText)
    const newAmount = heartAmountNumber + 1;
    document.getElementById('heart-amount').innerText = newAmount
}
// 1 
document.getElementById('heart-button-1')
    .addEventListener('click', function () {
        heartButton('heart-button-1')
    })
// 2
document.getElementById('heart-button-2')
    .addEventListener('click', function () {
        heartButton('heart-button-2')
    })
// 3
document.getElementById('heart-button-3')
    .addEventListener('click', function () {
        heartButton('heart-button-3')
    })
// 4
document.getElementById('heart-button-4')
    .addEventListener('click', function () {
        heartButton('heart-button-4')
    })
// 5
document.getElementById('heart-button-5')
    .addEventListener('click', function () {
        heartButton('heart-button-5')
    })
// 6
document.getElementById('heart-button-6')
    .addEventListener('click', function () {
        heartButton('heart-button-6')
    })
// 7
document.getElementById('heart-button-7')
    .addEventListener('click', function () {
        heartButton('heart-button-7')
    })
// 8
document.getElementById('heart-button-8')
    .addEventListener('click', function () {
        heartButton('heart-button-8')
    })
// 9
document.getElementById('heart-button-9')
    .addEventListener('click', function () {
        heartButton('heart-button-9')
    })

// Heart button function ended 
// ---------------------------------------------------------------------

// call button function 
function callButton(id) {
    const coinAmount = parseInt(document.getElementById('coin-amount').innerText)
    if (coinAmount < 20) {
        alert('Insufficient coin, please recharge!')
        return false;
    }
    const newCoinAmount = coinAmount - 20
    document.getElementById('coin-amount').innerText = newCoinAmount
    return true;
}


// 1
document.getElementById('call-btn-1')
    .addEventListener('click', function () {

        const completed = callButton('call-btn-1')
        if (completed === true) {
            alert('Calling National Emergency 999')
        }

        // push history data 
        const historyData = {
            service: 'জরুরি সেবা',
            number: 999,
            time: new Date().toLocaleTimeString()
        }
        history.push(historyData)
        historyInfo()
    })

// 2
document.getElementById('call-btn-2')
    .addEventListener('click', function () {

        const completed = callButton('call-btn-2')
        if (completed === true) {
            alert('Calling National Police 999')
        }
        // push history data 
        const historyData = {
            service: 'পুলিশ',
            number: 999,
            time: new Date().toLocaleTimeString()
        }
        history.push(historyData)
        historyInfo()
    })

// 3
document.getElementById('call-btn-3')
    .addEventListener('click', function () {

        const completed = callButton('call-btn-3')
        if (completed === true) {
            alert('Calling Fire Service 999')
        }
        // push history data 
        const historyData = {
            service: 'ফায়ার সার্ভিস',
            number: 999,
            time: new Date().toLocaleTimeString()
        }
        history.push(historyData)
        historyInfo()
    })

// 4
document.getElementById('call-btn-4')
    .addEventListener('click', function () {

        const completed = callButton('call-btn-4')
        if (completed === true) {
            alert('Calling Ambulance 1994-999999')
        }
        // push history data 
        const historyData = {
            service: 'অ্যাম্বুলেন্স',
            number: 1994999999,
            time: new Date().toLocaleTimeString()
        }
        history.push(historyData)
        historyInfo()
    })

// 5
document.getElementById('call-btn-5')
    .addEventListener('click', function () {

        const completed = callButton('call-btn-5')
        if (completed === true) {
            alert('Calling Women & Child Helpline 109')
        }
        // push history data 
        const historyData = {
            service: 'নারী ও শিশু সহায়তা',
            number: 109,
            time: new Date().toLocaleTimeString()
        }
        history.push(historyData)
        historyInfo()
    })

// 6
document.getElementById('call-btn-6')
    .addEventListener('click', function () {

        const completed = callButton('call-btn-6')
        if (completed === true) {
            alert('Calling Anti-Corruption 106')
        }
        // push history data 
        const historyData = {
            service: 'দুদক',
            number: 106,
            time: new Date().toLocaleTimeString()
        }
        history.push(historyData)
        historyInfo()
    })

// 7
document.getElementById('call-btn-7')
    .addEventListener('click', function () {

        const completed = callButton('call-btn-7')
        if (completed === true) {
            alert('Calling Electricity Outage 16216')
        }
        // push history data 
        const historyData = {
            service: 'বিদ্যুৎ বিভ্রাট',
            number: 16216,
            time: new Date().toLocaleTimeString()
        }
        history.push(historyData)
        historyInfo()
    })

// 8
document.getElementById('call-btn-8')
    .addEventListener('click', function () {

        const completed = callButton('call-btn-8')
        if (completed === true) {
            alert('Calling Brac 16445')
        }
        // push history data 
        const historyData = {
            service: 'ব্র্যাক',
            number: 16445,
            time: new Date().toLocaleTimeString()
        }
        history.push(historyData)
        historyInfo()
    })

// 9
document.getElementById('call-btn-9')
    .addEventListener('click', function () {

        const completed = callButton('call-btn-9')
        if (completed === true) {
            alert('Calling Bangladesh Railway 163')
        }
        // push history data 
        const historyData = {
            service: 'বাংলাদেশ রেলওয়ে',
            number: 163,
            time: new Date().toLocaleTimeString()
        }
        history.push(historyData)
        historyInfo()
    })

// call button function ended 
// ---------------------------------------------------------------------

// copy button function 
function copyButton(id) {
    const copyAmountNumber = parseInt(document.getElementById('nav-copy-btn').innerText)
    alert('Number copied to clipboard!')
    const newAmount = copyAmountNumber + 1;
    document.getElementById('nav-copy-btn').innerText = newAmount
}
// copy to Clipboard function 
function copy(id) {
    const copyText = document.getElementById(id).innerText
    navigator.clipboard.writeText(copyText)
}


// 1 
document.getElementById('copy-btn-1')
    .addEventListener('click', function () {
        copyButton('copy-btn-1')
        copy('emergency-number')
    })
// 2
document.getElementById('copy-btn-2')
    .addEventListener('click', function () {
        copyButton('copy-btn-2')
        copy('police-number')
    })
// 3
document.getElementById('copy-btn-3')
    .addEventListener('click', function () {
        copyButton('copy-btn-3')
        copy('fire-service-number')
    })
// 4
document.getElementById('copy-btn-4')
    .addEventListener('click', function () {
        copyButton('copy-btn-4')
        copy('ambulance-number')
    })
// 5
document.getElementById('copy-btn-5')
    .addEventListener('click', function () {
        copyButton('copy-btn-5')
        copy('women-child-help-number')
    })
// 6
document.getElementById('copy-btn-6')
    .addEventListener('click', function () {
        copyButton('copy-btn-6')
        copy('anti-corruption-number')
    })
// 7
document.getElementById('copy-btn-7')
    .addEventListener('click', function () {
        copyButton('copy-btn-7')
        copy('electricity-number')
    })
// 8
document.getElementById('copy-btn-8')
    .addEventListener('click', function () {
        copyButton('copy-btn-8')
        copy('brac-number')
    })
// 9
document.getElementById('copy-btn-9')
    .addEventListener('click', function () {
        copyButton('copy-btn-9')
        copy('railway-number')

    })

// copy button function ended
// ---------------------------------------------------------------------



// history button function 
function historyInfo() {
    const newHistory = document.getElementById('history-data-section')
    newHistory.innerHTML = ''
    for (const data of history) {
        const newDiv = document.createElement('div')
        newDiv.innerHTML = `
    <div class="flex justify-between items-center p-3 rounded-xl shadow-sm mb-3">
                    <div id="called-element">
                        <h2 id="called-element-title" class=" font-semibold">${data.service}</h2>
                        <p id="called-element-number" class="">${data.number}</p>
                    </div>
                    <span id="time" class="text-sm">${data.time}</span>
                </div>`
        newHistory.appendChild(newDiv)
    }
}
// history button function ended
// ---------------------------------------------------------------------

// clear history button 
const historyContainer = document.getElementById('history-data-section')
document.getElementById('clear-btn')
    .addEventListener('click', function () {
        history = []
        historyContainer.innerHTML = ''
    })
// clear history button ended
// ---------------------------------------------------------------------
