//Задача 1. Переведите текст вида border-left-width в borderLeftWidth
/*Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
То есть дефисы удаляются, а все слова после них получают заглавную букву.*/
{
	function camelize(str) {
		let strArray = str.split('-');
		strArray = strArray.map((element, index) => index == 0 ? element : element[0].toUpperCase() + element.slice(1))
		return strArray.join('');
	}
	alert(camelize("background-color"));
	alert(camelize("list-style-image"));
	alert(camelize("-webkit-transition"));
}

//Задача 2. Фильтрация по диапазону
/*Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со
значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.
Функция должна возвращать новый массив и не изменять исходный.
Например:
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); // 3,1 (совпадающие значения)
alert( arr ); // 5,3,8,1 (без изменений)*/
{
	function filterRange(arr, a, b) {
		return arr.filter(function(item) { return (a <= item && item <= b)});
	}
	let arr = [5, 23, 9, 11, 15, 3, 1, 6, 24];
	let filteredArray = filterRange(arr, 3, 16);
	alert(filteredArray); 
}

//Задача 3. Фильтрация по диапазону "на месте"
/*Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет 
из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид 
a ≤ arr[i] ≤ b. Функция должна изменять принимаемый массив и ничего не возвращать.
Например:
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
alert( arr ); // [3, 1]*/
{
	function filterRangeInPlace(arr, a, b) {

		for (let i = 0; i < arr.length; i++) {
			let element = arr[i];
			if (element < a || element > b) {
				arr.splice(i, 1);
				i -= 1;
			}
		}
	}

	let arr = [5, 23, 9, 11, 15, 3, 1, 6, 24];
	filterRangeInPlace(arr, 3, 16);
	alert(arr);
}

//Задача 4. Сортировать в порядке по убыванию
{
	let arr = [5, 2, 1, -10, 8];
	arr.sort((a, b) => b - a)
	alert(arr);
}

//Задача 5. Скопировать и отсортировать массив
/*У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr 
неизменённым. Создайте функцию copySorted(arr), которая будет возвращать такую копию.*/
{
	function copySorted(arr) {
		let copyArray = arr.slice();
		return copyArray.sort();
	}

	let arr = ["HTML", "JavaScript", "CSS"];
	let sorted = copySorted(arr);
	alert(sorted);
	alert(arr); 
}

//Задача 6. Создать расширяемый калькулятор
/*Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
Задание состоит из двух частей.
Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате 
«ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать 
плюс + и минус -.
Пример использования:
let calc = new Calculator;
alert( calc.calculate("3 + 7") ); // 10

Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он 
	принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
Например, давайте добавим умножение *, деление / и возведение в степень **:
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
Для этой задачи не нужны скобки или сложные выражения.
Числа и оператор разделены ровно одним пробелом.
Не лишним будет добавить обработку ошибок.*/
{
	function Calculator() {
		this.methods = {
			"-": (a, b) => a - b,
			"+": (a, b) => a + b
		};
		this.calculate = function(str) {
			let split = str.split(' '),
				a = +split[0],
				op = split[1],
				b = +split[2]
			if (!this.methods[op] || isNaN(a) || isNaN(b)) {
				return NaN;
			}
			return this.methods[op](a, b);
		}
		this.addMethod = function(name, func) {
			this.methods[name] = func;
		};
	}

	let calc = new Calculator;
	alert( calc.calculate("3 + 7") );

	let powerCalc = new Calculator;
	powerCalc.addMethod("*", (a, b) => a * b);
	powerCalc.addMethod("/", (a, b) => a / b);
	powerCalc.addMethod("**", (a, b) => a ** b);
	let result = powerCalc.calculate("2 ** 3");
	alert( result );
}

//Задача 7. Трансформировать в массив имён
/*У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который 
преобразует их в массив имён.
*/
{
	let vasya = { name: "Вася", age: 25 };
	let petya = { name: "Петя", age: 30 };
	let masha = { name: "Маша", age: 28 };
	
	let users = [ vasya, petya, masha ];
	
	let names = users.map((item) => item.name);
	
	alert( names );
}

//Задача 8. Трансформировать в объекты
/*У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где 
fullName – состоит из name и surname.
*/
{
	let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
	let petya = { name: "Петя", surname: "Иванов", id: 2 };
	let masha = { name: "Маша", surname: "Петрова", id: 3 };
	
	let users = [ vasya, petya, masha ];
	
	let usersMapped = users.map((item) => ({
		fullName: item.name + item.surname,
		id: item.id
	}));
	
	alert( usersMapped[0].id )
	alert( usersMapped[0].fullName )
}

//Задача 9. Отсортировать пользователей по возрасту
/*Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и 
сортирует их по нему.
*/
{
	function sortByAge(arr) {
		arr.sort((a, b) => a.age < b.age ? -1 : 1);
	}

	let vasya = { name: "Вася", age: 25 };
	let petya = { name: "Петя", age: 30 };
	let masha = { name: "Маша", age: 28 };
	
	let arr = [ vasya, petya, masha ];
	
	sortByAge(arr);
	
	alert(arr[0].name);
	alert(arr[1].name);
	alert(arr[2].name);
}

//Задача 10. Перемешайте массив
/*Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы 
массива. Многократные прогоны через shuffle могут привести к разным последовательностям элементов. 
Например:
let arr = [1, 2, 3];
shuffle(arr);
// arr = [3, 2, 1]
shuffle(arr);
// arr = [2, 1, 3]
shuffle(arr);
// arr = [3, 1, 2]
Все последовательности элементов должны иметь одинаковую вероятность. Например, [1,2,3] может быть 
переупорядочено как [1,2,3] или [1,3,2], или [3,1,2] и т.д., с равной вероятностью каждого случая.
*/
{
	function shuffle(array) {
		array.sort(() => Math.random() - 0.5);
	}
	
	let arr = [1, 2, 3, 4, 5];
	shuffle(arr);
	alert(arr);
}

//Задача 11. Получить средний возраст
/*Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и 
возвращает средний возраст.
Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.
*/
{
	function getAverageAge(users) {
		return users.reduce((accumulator, user) => accumulator + user.age, 0) / users.length;
	}
	
	let vasya = { name: "Вася", age: 25 };
	let petya = { name: "Петя", age: 30 };
	let masha = { name: "Маша", age: 29 };
	
	let arr = [ vasya, petya, masha ];
	
	alert( getAverageAge(arr) );
}

//Задача 12. Оставить уникальные элементы массива
/*Пусть arr – массив строк.
Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
*/
{
	function unique(arr) {
		let result = [];
		for (let element of arr) {
			if (!result.includes(element)) {
				result.push(element);
			}
		}
		return result;
	}
	
	let strings = ["кришна", "кришна", "харе", "харе",
		"харе", "харе", "кришна", "кришна", ":-O"
	];
	alert( unique(strings) );
}

//Задача 13. Создайте объект с ключами из массива
/*Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.
Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами 
массива в качестве значений.
*/
{
	function groupById(array) {
		return array.reduce((obj, value) => {
			obj[value.id] = value;
			return obj;
		}, {})
	}

	let users = [
		{id: 'john', name: "John Smith", age: 20},
		{id: 'ann', name: "Ann Smith", age: 24},
		{id: 'pete', name: "Pete Peterson", age: 31},
	];
	let usersById = groupById(users);
}