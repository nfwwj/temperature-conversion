const textbox = document.querySelector("#textbox")
const toF = document.querySelector('#toF')
const toC = document.querySelector('#toC')

const button = document.querySelector('button')
const display = document.querySelector ('#result')
const unit = document.querySelector('span')

convert()
button.addEventListener('click', () => {
    convert()
})

textbox.addEventListener('input',convert)

toF.addEventListener('change', convert)
toC.addEventListener('change', convert)


function convert(){

let num = textbox.value

    unit.innerText = toF.checked ? '°C' : '°F'

    if(isNaN(parseFloat(num))){
        display.innerText = 'Enter a valid number!'

    }
   

    else if(toF.checked){
        var F = num * 9 / 5 + 32
        display.innerText = F.toFixed(2)+'°F'
         
        
    }
    else if(toC.checked){
        var C = (num - 32) * 5 / 9
        display.innerText = C.toFixed(2)+'°C'
    
    }
}