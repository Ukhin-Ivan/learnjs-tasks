//Задача 1. Две функции - один объект
/*Возможно ли создать функции A и B, чтобы new A() == new B()?
function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert( a == b ); // true
Если да – приведите пример вашего кода.*/
//Возможно, если обе функции будут возвращить один и тот же внешний объект
let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() ); // true

//Задача 2. Создайте калькулятор при помощи конструктора, new Calculator
/*Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:
	read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
	sum() возвращает сумму этих свойств.
	mul() возвращает произведение этих свойств.
Например:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );*/
{
	function Calculator() {
		this.read = function() {
			this.arg1 = +prompt('Введите значение', '');
			this.arg2 = +prompt('Введите значение', '');
		}
		this.sum = function() {
			return this.arg1 + this.arg2;
		}
		this.mul = function() {
			return this.arg1 * this.arg2;
		}
	}

	let calculator = new Calculator();
	calculator.read();

	alert( "Sum=" + calculator.sum() );
	alert( "Mul=" + calculator.mul() );
}


//Задача 3. Создайте new Accumulator
/*Создайте функцию-конструктор Accumulator(startingValue).
Объект, который она создаёт, должен уметь следующее:
Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.
Ниже вы можете посмотреть работу кода:
let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений*/
{
	function Accumulator(startingValue) {
		this.startingValue = startingValue;
		this.value = startingValue;
		this.read = function() {
			this.value += +prompt('Введите значение', '');
		}
	}

	let accumulator = new Accumulator(1);

	accumulator.read();
	accumulator.read();

	alert(accumulator.value);
}