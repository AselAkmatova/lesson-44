document.addEventListener('DOMContentLoaded', function () {
  messageForm = document.querySelector('.form__col');
  messageDiv = document.querySelector('.messages');

  messageForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const author = messageForm.querySelector('#author').value;
    const message = messageForm.querySelector('#message').value;

    let message = document.createElement('div');
    message.classList.add('box');
    message.classList.add('col-12');

    message.innerHTML = `
    <h3>${author}</h3>
    <p>${message}</p>`;
  });

  messageDiv.prepend(message);
});
