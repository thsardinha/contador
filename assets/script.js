const value = document.querySelector('#value')

function onIncrement() {
    value.innerHTML = `${parseInt(value.innerText) + 1}`
}

function onDecrement() {
    value.innerHTML = `${parseInt(value.innerText) - 1}`
}

function clean() {
    value.innerHTML = '0'
}