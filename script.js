const button = document.getElementById('Button');
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

button.addEventListener('click', function(event) {
  event.currentTarget.style.backgroundColor = 'blue';
  this.innerText = 'Opening';
  await wait(2000);
  this.innerText = 'Opened in new tab';
  event.currentTarget.style.backgroundColor = 'red';
  window.open('https://edwebcontent.ed.ac.uk/sites/default/files/atoms/files/candidatestatementross.pdf', '_blank');
});
