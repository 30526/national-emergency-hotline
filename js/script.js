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
    })

// 2
document.getElementById('call-btn-2')
    .addEventListener('click', function () {

        const completed = callButton('call-btn-2')
        if (completed === true) {
            alert('Calling National Police 999')
        }
    })

// 3
document.getElementById('call-btn-3')
    .addEventListener('click', function () {

        const completed = callButton('call-btn-3')
        if (completed === true) {
            alert('Calling Fire Service 999')
        }
    })

// 4
document.getElementById('call-btn-4')
    .addEventListener('click', function () {

        const completed = callButton('call-btn-4')
        if (completed === true) {
            alert('Calling Ambulance 1994-999999')
        }
    })

// 5
document.getElementById('call-btn-5')
    .addEventListener('click', function () {

        const completed = callButton('call-btn-5')
        if (completed === true) {
            alert('Calling Women & Child Helpline 109')
        }
    })

// 6
document.getElementById('call-btn-6')
    .addEventListener('click', function () {

        const completed = callButton('call-btn-6')
        if (completed === true) {
            alert('Calling Anti-Corruption 106')
        }
    })

// 7
document.getElementById('call-btn-7')
    .addEventListener('click', function () {

        const completed = callButton('call-btn-7')
        if (completed === true) {
            alert('Calling Electricity Outage 16216')
        }
    })

// 8
document.getElementById('call-btn-8')
    .addEventListener('click', function () {

        const completed = callButton('call-btn-8')
        if (completed === true) {
            alert('Calling Brac 16445')
        }
    })

// 9
document.getElementById('call-btn-9')
    .addEventListener('click', function () {

        const completed = callButton('call-btn-9')
        if (completed === true) {
            alert('Calling Bangladesh Railway 163')
        }
    })

// call button function ended 
// ---------------------------------------------------------------------

// copy button function 
function copyButton(id) {
    const copyAmountNumber = parseInt(document.getElementById('nav-copy-btn').innerText)
    const newAmount = copyAmountNumber + 1;
    document.getElementById('nav-copy-btn').innerText = newAmount
}

// 1 
document.getElementById('copy-btn-1')
    .addEventListener('click', function () {
        copyButton('copy-btn-1')
    })
// 2
document.getElementById('copy-btn-2')
    .addEventListener('click', function () {
        copyButton('copy-btn-2')
    })
// 3
document.getElementById('copy-btn-3')
    .addEventListener('click', function () {
        copyButton('copy-btn-3')
    })
// 4
document.getElementById('copy-btn-4')
    .addEventListener('click', function () {
        copyButton('copy-btn-4')
    })
// 5
document.getElementById('copy-btn-5')
    .addEventListener('click', function () {
        copyButton('copy-btn-5')
    })
// 6
document.getElementById('copy-btn-6')
    .addEventListener('click', function () {
        copyButton('copy-btn-6')
    })
// 7
document.getElementById('copy-btn-7')
    .addEventListener('click', function () {
        copyButton('copy-btn-7')
    })
// 8
document.getElementById('copy-btn-8')
    .addEventListener('click', function () {
        copyButton('copy-btn-8')
    })
// 9
document.getElementById('copy-btn-9')
    .addEventListener('click', function () {
        copyButton('copy-btn-9')
    })
