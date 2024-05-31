function showDate() {
  let out = document.getElementById('current-date');
  let enOut = document.getElementById('en-locale');
  let esOut = document.getElementById('es-locale');
  let deOut = document.getElementById('de-locale');
  let zhOut = document.getElementById('zh-locale');
  let today = new Date();

  out.innerHTML = 'Дата и время для русской локали: ' + today.toLocaleString('ru-RU');
  enOut.innerHTML = 'Дата и время для английской (США) локали: ' + today.toLocaleString('en-US');
  esOut.innerHTML = 'Дата и время для испанской (Испания) локали: ' + today.toLocaleString('es-ES');
  deOut.innerHTML = 'Дата и время для немецкой (Германия) локали: ' + today.toLocaleString('de-DE');
  zhOut.innerHTML = 'Дата и время для китайской (Китай) локали: ' + today.toLocaleString('zh-CN');

document.getElementById('year').innerHTML = 'Текущий год: ' + today.getFullYear();
const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
document.getElementById('month').innerHTML = 'Текущий месяц: ' + months[today.getMonth()];
document.getElementById('day').innerHTML = 'Текущий день: ' + today.getDate();
const weekDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
document.getElementById('weekDay').innerHTML = 'Текущий день недели: ' + weekDays[today.getDay()];

document.getElementById('dayButton').addEventListener('click', function() {
YEAR = document.getElementById('YEAR').value; 
 MONTH = document.getElementById('MONTH').value;
DAY = document.getElementById('DAY').value;

const date = new Date(YEAR, MONTH - 1, DAY);
const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const dayOfWeek = daysOfWeek[date.getDay()];

document.getElementById('result').innerHTML = dayOfWeek;
})
}







  
  