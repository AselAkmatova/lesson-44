document.addEventListener('DOMContentLoaded', function () {
  messageForm = document.querySelector('.btn');
  messagesDiv = document.querySelector('.messages');

  messageForm.addEventListener('click', (e) => {
    e.preventDefault();

    const author = document.querySelector('#author').value;
    const message = document.querySelector('#message').value;

    let newMessage = document.createElement('div');
    newMessage.classList.add('box');
    newMessage.classList.add('col-12');

    newMessage.innerHTML = `
    <h3>${author}</h3>
    <p>${message}</p>`;

    messagesDiv.prepend(newMessage);
  });
});
