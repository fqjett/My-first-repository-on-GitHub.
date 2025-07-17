const popup = document.getElementById('orderForm');
const openBtn = document.querySelector('.open-order');

openBtn.addEventListener('click', function(e) {
  e.preventDefault();
  popup.style.display = 'block';
});

function closePopup() {
  popup.style.display = 'none';
}

window.addEventListener('click', function(event) {
  if (event.target === popup) {
    closePopup();
  }
});
