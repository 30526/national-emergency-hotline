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