const printTitle = function () {
  const title = document.querySelector('h1')
  title.innerText = 'Tombola'
}

const createTable = function () {
  const numberDivs = document.getElementById('bingo')
  for (let i = 0; i < 76; i++) {
    const numberCells = document.createElement('div')
    numberCells.classList.add('divsNumber')
    const numbers = document.createElement('p')
    numbers.classList.add('number')
    numbers.innerText = i + 1
    numberCells.appendChild(numbers)
    numberDivs.appendChild(numberCells)
  }
}

const selectNumber = function (e) {
  e.preventDefault()

  const arrayNumber = []
  for (let i = 0; i < 1; i++) {
    random = Math.floor(Math.random() * 76 + 1)
    arrayNumber.push(random)
  }
  console.log(arrayNumber)
  const extractedNumber = parseInt(arrayNumber)
  console.log(extractedNumber)
}

printTitle()
createTable()
const button = document.querySelector('form')
button.addEventListener('submit', selectNumber)
