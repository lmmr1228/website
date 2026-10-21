
const button = document.getElementById('Button');

const wait = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

button.addEventListener('click', async function(event) {
  const tab = window.open('about:blank', '_blank');

  event.currentTarget.style.backgroundColor = 'blue';
  this.innerText = 'Opening';

  await wait(2000);

  this.innerText = 'Opened in new tab';
  event.currentTarget.style.backgroundColor = 'red';

  if (tab) {
    tab.location.href =
      'https://edwebcontent.ed.ac.uk/sites/default/files/atoms/files/candidatestatementross.pdf';
  } else {
    this.innerText = 'Popup blocked';
  }
});
