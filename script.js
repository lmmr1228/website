const button = document.getElementById('Button');

button.addEventListener('click', function(event) {
  event.currentTarget.style.backgroundColor = 'blue';
  this.innerText = 'Opened in new tab';
  window.open('https://edwebcontent.ed.ac.uk/sites/default/files/atoms/files/candidatestatementross.pdf', '_blank');
});
