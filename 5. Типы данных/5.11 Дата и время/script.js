//Задача 1. Создайте дату
//Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
//Для вывода используйте alert.
{
	let date = new Date(2012, 1, 20, 3, 12);
	alert( date );
}

//Задача 2. Покажите день недели
/*Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», 
«СР», «ЧТ», «ПТ», «СБ», «ВС».
Например:
let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getWeekDay(date) );        // нужно вывести "ВТ"*/
{
	function getWeekDay(date) {
		let daysOfWeek = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
		return daysOfWeek[date.getDay()];
	}
	
	let date = new Date(2012, 0, 3);
	alert(getWeekDay(date));
}

//Задача 3. День недели в европейской нумерации
/*В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник 
(номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает 
«европейский» день недели для даты date.
let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getLocalDay(date) ); */
{
	function getLocalDay(date) {
			let day = date.getDay();
			day = day == 0 ? 7 : day;
			return day;
		}

		let date = new Date(2012, 0, 8);
		alert(getLocalDay(date));
}

//Задача 4. Какой день месяца был много дней назад?
/*Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от 
даты date. К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт 
девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое. Функция должна надёжно работать при 
значении days=365 и больших значениях:
let date = new Date(2015, 0, 2);
alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
P.S. Функция не должна изменять переданный ей объект date.*/
{
	function getDateAgo(date, days) {
		let daysToPreviousDate = date.getDate() - days
		let dateCopy = new Date(date);
	
		dateCopy.setDate(daysToPreviousDate);
		return dateCopy.getDate();
	}
	
	let date = new Date(2015, 0, 2);
	
	alert(getDateAgo(date, 1));
	alert(getDateAgo(date, 2));
	alert(getDateAgo(date, 365));
}

//Задача 5. Последнее число месяца?
/*Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. 
Иногда это 30, 31 или даже февральские 28/29.
Параметры:
	year – год из четырёх цифр, например, 2012.
	month – месяц от 0 до 11.
К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).*/
{
	function getLastDayOfMonth(year, month) {
		let date = new Date(year, month + 1, 0);
		return date.getDate();
	}
	
	alert(getLastDayOfMonth(2012, 0));
	alert(getLastDayOfMonth(2012, 1));
	alert(getLastDayOfMonth(2013, 1));
}

//Задача 6. Сколько сегодня прошло секунд?
/*Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:
getSecondsToday() == 36000 // (3600 * 10)
Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.*/
{
	function getSecondsToday() {
		let currentTime = new Date();
		let currentDay = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate());
	
		let difference = currentTime - currentDay;
		return Math.round(difference / 1000);
	}
	
	alert(getSecondsToday());
}

//Задача 7. Сколько секунд осталось до завтра?
/*Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

Например, если сейчас 23:00, то:

getSecondsToTomorrow() == 3600
P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.*/
{
	function getSecondsToTomorrow() {
		let currentTime = new Date();
		let nextDay = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime	.getDate() + 1);
	
		let difference = nextDay - currentTime;
		return Math.round(difference / 1000);
	}
	
	alert(getSecondsToday());
}

//Задача 7. Форматирование относительной даты
/*Напишите функцию formatDate(date), форматирующую date по следующему принципу:
Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", 
всё в виде двух цифр, т.е. 31.12.16 10:00.
Например:
alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"
alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );*/
{
	function formatDate(date) {
		let dayOfMonth = date.getDate();
		let month = date.getMonth() + 1;
		let year = date.getFullYear();
		let hour = date.getHours();
		let minutes = date.getMinutes();
		let differenceMs = new Date() - date;
		let differenceSec = Math.round(differenceMs / 1000);
		let differenceMin = differenceSec / 60;
		let differenceHour = differenceMin / 60;
	
		year = year.toString().slice(-2);
		month = month < 10 ? '0' + month : month;
		dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
		hour = hour < 10 ? '0' + hour : hour;
		minutes = minutes < 10 ? '0' + minutes : minutes;
	
		if (differenceSec < 1) {
			return 'прямо сейчас';
		} else if (differenceMin < 1) {
			return `${differenceSec} сек. назад`
		} else if (differenceHour < 1) {
			return `${differenceMin} мин. назад`
		} else {
			return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
		}
	}

	alert( formatDate(new Date(new Date - 1)) );
	alert( formatDate(new Date(new Date - 30 * 1000)) );
	alert( formatDate(new Date(new Date - 5 * 60 * 1000)) );
	alert( formatDate(new Date(new Date - 86400 * 1000)) );
}