function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};
  
createDaysOfTheWeek();
  
// Escreva seu código abaixo.
// 1
function calenderDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const tagUl = document.getElementById('days')

  for (let i = 0; i < dezDaysList.length; i++) {
    const day = dezDaysList[i]
    let tagLi = document.createElement('li')
    tagLi.className = 'day'

    // Add dia a tag li
    tagLi.innerHTML = day

    tagUl.appendChild(tagLi)

    if (tagLi.innerHTML == 24 || tagLi.innerHTML == 25 || tagLi.innerHTML == 31) {
      tagLi.classList.add('holiday')
    }

    if (tagLi.innerHTML == 4 || tagLi.innerHTML == 11 || tagLi.innerHTML == 18 || tagLi.innerHTML == 25) {
      tagLi.classList.add('friday')
    }
  }
}

calenderDays()

// 2
function holidays(feriado) {
  let button = document.createElement('button')
  let buttonsContainer = document.querySelector('.buttons-container')
  button.innerHTML = 'Feriados'
  button.id = 'btn-holiday'

  buttonsContainer.appendChild(button)
}

holidays()

// 3
function holidaysClick() {
  let button = document.querySelector('#btn-holiday')
  button.addEventListener('click', function() {
    let getHoliday = document.querySelectorAll('.holiday')
    for (let i = 0; i < getHoliday.length; i++) {
      if(getHoliday[i].style.backgroundColor == 'green') {
        getHoliday[i].style.backgroundColor = '#eee'
        getHoliday[i].style.color = '#777'
      } else {
        getHoliday[i].style.backgroundColor = 'green'
        getHoliday[i].style.color = 'whitesmoke'
      }
      
    }
  })
}

holidaysClick()

// 4
function fridayDay(sexta) {
  let sextaFeira = document.createElement('button')
  let buttonContainer = document.querySelector('.buttons-container')
  sextaFeira.id = 'btn-friday'
  sextaFeira.innerText = 'SEXTOU!!'
  buttonContainer.appendChild(sextaFeira)
}

fridayDay()

// 5
function sextouu() {
  let fridayButton = document.querySelector('#btn-friday')
  let getFriday = document.querySelectorAll('.friday')
  let fridays = [4, 11, 18, 25]
  fridayButton.addEventListener('click', function() {
    for (let i = 0; i < getFriday.length; i++) {
      if(getFriday[i].innerHTML !== 'SEXTOU!!') {
        getFriday[i].innerHTML = 'SEXTOU!!'
      } else {
        getFriday[i].innerHTML = fridays[i]
      }
    }
  })
}

sextouu()

// 6
function zoomIn() {
  let days = document.querySelectorAll('.day')

  for(let i = 0; i < days.length; i++) {
    days[i].addEventListener('mouseover', function() {
      days[i].style.zoom = '180%'
    })
  }

}

zoomIn()

// function zoomOut() {
  let days = document.querySelectorAll('.day')

  for(let i = 0; i < days.length; i++) {
    days[i].addEventListener('mouseout', function() {
      days[i].style.zoom = '100%'
    })
  }

zoomOut()