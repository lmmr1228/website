const button = document.getElementById('Button');

button.addEventListener('click', function(event) {
  const tab = window.open('about:blank', '_blank');

  event.currentTarget.style.backgroundColor = 'blue';
  this.innerText = 'Opened tab';

  if (tab) {
    tab.location.href =
      'http://github.aeonify.org/game/';
  } else {
    this.innerText = 'Popup blocked';
  }
});
