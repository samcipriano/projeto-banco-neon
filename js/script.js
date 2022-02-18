const btnDropdown = document.querySelector('.js-btn-dropdown')
const dropdown = document.querySelector('.js-dropdown')

function openDropdown(event) {
  event.preventDefault()

  dropdown.classList.toggle('active')
}

btnDropdown.addEventListener('click', openDropdown)
dropdown.addEventListener('mouseleave', openDropdown)