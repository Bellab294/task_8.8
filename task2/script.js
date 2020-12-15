const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
})

const alertname = document.querySelector('#alert');

alertname.addEventListener('click', () => {
    alert('Служит для отображения информации для пользователей');
})

const promptname = document.querySelector('#prompt');

promptname.addEventListener('click', () => {
    alert('Отображает диалоговое окно с запросом на ввод текста');
})