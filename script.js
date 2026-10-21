const button = document.getElementById('Button');

button.addEventListener('click', function(event) {
  event.currentTarget.style.backgroundColor = 'blue';
  this.innerText = 'Clicked';
});
