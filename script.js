const writeMeLink = document.querySelector('.click');
const closeButton = document.querySelector('.close');
const popup = document.querySelector('.modal');

function showPopup() {
  popup.style.display = 'flex';
}

function closePopup() {
  popup.style.display = 'none';
}

writeMeLink.addEventListener('click', showPopup);
closeButton.addEventListener('click', closePopup);