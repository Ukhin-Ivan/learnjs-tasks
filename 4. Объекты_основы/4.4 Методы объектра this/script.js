//Задача 1. Использование "this" в литерале объекта
//Здесь функция makeUser возвращает объект.
//Каким будет результат при обращении к свойству объекта ref? Почему?
{
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // Каким будет результат?
//Результатом будет ошибка Error: Cannot read property 'name' of undefined
}

//Задача 2. Создайте калькулятор
/*Создайте объект calculator (калькулятор) с тремя методами:
read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.*/
{
	let calculator = {
		read() {
			this.arg1 = +prompt('Введите значение', '');
			this.arg2 = +prompt('Введите значение', '');
		},
		sum() {
				return this.arg1 + this.arg2;
		},
		mul() {
				return this.arg1 * this.arg2;
		}
	};
	calculator.read();
	alert( calculator.sum() );
	alert( calculator.mul() );
}

//Задача 3. Цепь вызовов
/*У нас есть объект ladder (лестница), который позволяет подниматься и спускаться:
let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
  }
};
Теперь, если нам нужно выполнить несколько последовательных вызовов, мы можем сделать это так:
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0
Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:
ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0
Такой подход широко используется в библиотеках JavaScript.*/
{
	let ladder = {
		step: 0,
		up() {
			this.step++;
			return ladder;
		},
		down() {
			this.step--;
			return ladder;
		},
		showStep: function() { // показывает текущую ступеньку
			alert( this.step );
			return ladder;
		}
	}
	ladder.up().up().down().showStep().down().showStep()
}