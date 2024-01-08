/*
1 meter = 3.2808 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

//TO-DO: Refactor calculation and render functions

const meterToFeet = 3.2808
const literToGallon = 0.264172
const kiloToPound = 2.204623

let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")
const convertBtn = document.querySelector("#convertBtn")
let baseStr = " "
 
convertBtn.onclick = function() {
    const inputVal = document.getElementById("input-el").value; 
    length(inputVal)
    volume(inputVal)
    mass(inputVal)
}

function length(num){
    const metersToFeet = (num * meterToFeet).toFixed(3)
    const feetToMeters = (num / meterToFeet).toFixed(3)
    renderMeters(num, metersToFeet, feetToMeters, "meters", "feet")
}

function volume(num) {
    const litersToGallons = (num * literToGallon).toFixed(3)
    const gallonsToLiters = (num / literToGallon).toFixed(3)
    renderLiters(num, litersToGallons, gallonsToLiters, "liters", "gallons")
}

function mass(num) {
    const kilosToPounds = (num * kiloToPound).toFixed(3)
    const poundsToKilos = (num / kiloToPound).toFixed(3)
    renderKilos(num, kilosToPounds, poundsToKilos, "kilos", "pounds")
}


function renderMeters(inputEl, num1, num2, unit1, unit2){
    
    baseStr = `
    ${inputEl} ${unit1} = ${num1} ${unit2} |
    ${inputEl} ${unit2} = ${num2} ${unit1}
    `
    lengthEl.textContent = baseStr
}

function renderLiters(inputEl, num1, num2, unit1, unit2){
    
    baseStr = `
    ${inputEl} ${unit1} = ${num1} ${unit2} |
    ${inputEl} ${unit2} = ${num2} ${unit1}
    `
    volumeEl.textContent = baseStr
    
}

function renderKilos(inputEl, num1, num2, unit1, unit2){
    
    baseStr = `
    ${inputEl} ${unit1} = ${num1} ${unit2} |
    ${inputEl} ${unit2} = ${num2} ${unit1}
    `
     massEl.textContent = baseStr
   
}

