var modalButton = document.querySelector('.button-search-hotel');
var modal = document.querySelector('.hotel-search-modal');
var textOpacity = document.querySelector('.form-inputs');
modalButton.addEventListener('click', function(){
  if (!modal.classList.contains('modal-close') && !textOpacity.classList.contains('content-opacity')) {
    modal.classList.add('modal-close');
    textOpacity.classList.add('content-opacity');
  } else {
    modal.classList.remove('modal-close');
    textOpacity.classList.remove('content-opacity');
  }
});