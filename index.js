let countEl = document.getElementById("count1")
let countEl2 = document.getElementById("count2")

let count1 = 0
let count2 = 0

countEl.textContent = count1
countEl2.textContent = count2
// --------------------------------------------------------------------
function add1() {
    count1 += 1
    countEl.textContent = count1
}

function add2() {
    count1 += 2
    countEl.textContent = count1
}

function add3() {
    count1 += 3
    countEl.textContent = count1
}

// --------------------------------------------------------------------

function add1_1() {
    count2 += 1
    countEl2.textContent = count2
}

function add2_2() {
    count2 += 2
    countEl2.textContent = count2
}

function add3_3() {
    count2 += 3
    countEl2.textContent = count2
}
// --------------------------------------------------------------------


function reset() {
    count1 = 0
    countEl.textContent = count1
    count2 = 0
    countEl2.textContent = count2
}

