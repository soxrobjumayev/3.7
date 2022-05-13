var formEl = document.querySelector('.myForm')
var kursInputEl = document.querySelector('.kurs')
var valyutaSelectEl = document.querySelector('.valyuta')
var resultDivEL = document.querySelector('.result')

formEl.addEventListener('submit', function(event) {
    event.preventDefault();

    resultDivEL.textContent = kursInputEl.value / valyutaSelectEl.value;
    
})