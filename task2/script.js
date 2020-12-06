const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
})

const alert = document.querySelector('#alert');

alert.addEventListener('click', () => {
    alert('Служит для отображения информации для пользователей');
})

const prompt = document.querySelector('#prompt');

prompt.addEventListener('click', () => {
    alert('Отображает диалоговое окно с запросом на ввод текста');
})