const linktext = document.querySelector('a');
linktext.addEventListener('click', (evt) => {
    evt.preventDefault();
    const userText = prompt('Введите текст');
    console.log(userText);
    linktext.textContent = userText;
    
})


