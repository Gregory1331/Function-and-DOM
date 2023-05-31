////////ФУНКЦИИ И DOM////////

// 348.1 Модифицируйте созданную мною функцию так, чтобы параметром она принимала не id элемента, а произвольный CSS селектор.
// function setText(class1, text) {
// 	let elem = document.querySelector('.'+class1);
// 	elem.textContent = text;
// }
// setText('p1', 'text1');
// setText('p2', 'text2'); 

// 348.2 Сделайте функцию setAttr, которая будет менять атрибут DOM элементу. Пусть первым параметром функция принимает селектор элемента, вторым - имя атрибута, а третьим - его новое значение.
// function setAttr(id, class1, value, text){
//     let p = document.querySelector('#'+id);
//     p.setAttribute(class1, value);
//     p.textContent = text; 
// }
// setAttr('p0','class', 'colorgreen', 'text');
// function setText(selector, text) {
// 	let elems = document.querySelectorAll(selector);
// 	for (let elem of elems) {
//         let span = document.createElement('span');
//         span.textContent = ' ' + text;
//         elem.append(span);
// 		elem.textContent = text;
// 	}
// }

// 349.1 Сделайте функцию appendText, которая первым параметром будет принимать селектор, а вторым - текст. Сделайте так, чтобы данная функция добавляла текст в конец переданных элементов.
// function appendText(selector, text) {
// 	let elems = document.querySelectorAll(selector);
// 	for (let elem of elems) {
// 		elem.textContent = elem.textContent + text;
// 	}
// }
// appendText('.elem', ' text');

// 350.1 Даны абзацы. С помощью созданной нами функции forEach для каждого абзаца добавьте в конец его текста восклицательный знак.
// forEach('.elem', function(elem) {
// 	elem.textContent = elem.textContent + '!';
// });
// function forEach(selector, func) {
// 	let elems = document.querySelectorAll(selector);
// 	for (let elem of elems) {
// 		func(elem);
// 	}
// }

// 351.1 Даны абзацы. С помощью созданной нами функции forEach для каждого абзаца добавьте ему в начало его порядковый номер.
// forEach('.elem', function(elem, index) {
// 	elem.textContent = index + elem.textContent ;
// });
// function forEach(selector, func) {
// 	let elems = document.querySelectorAll(selector);
// 	for (let i = 0; i < elems.length; i++) {
// 		func(elems[i], i);
// 	}
// }

// 352.1 Сделайте функцию appendText, которая первым параметром будет принимать DOM элемент, а вторым - текст. Сделайте так, чтобы данная функция добавляла текст в конец этого элемента.
// function appendText(elem, text){
// 	elem.textContent = elem.textContent + text;
// }
// let elem1 = document.getElementById('elem1');
// appendText(elem1, ' text1');
// let elem2 = document.getElementById('elem2');
// appendText(elem2, ' text2');

// 352.2 Даны абзацы. Получите их, переберите циклом и каждому добавьте в конец '!' с помощью функции appendText, сделанной в предыдущей задаче.
// let elems = document.querySelectorAll('.elem');
// appendText(elems, '!');
// function appendText(elems, text) {
// 	for (let elem of elems) {
// 		elem.textContent = elem.textContent + text;
// 	}
// }

// 352.3 Сделайте функцию setValue, которая первым параметром будет принимать ссылку на инпут, а вторым - текст. Сделайте так, чтобы данная функция устанавливала переданный текст в value инпута.
// function setValue(inp, value){
// 	inp.value = value;
// }
// let inp = document.getElementById('inp');
// setValue(inp, 'text');

// 353.1 Сделайте функцию appendText, которая первым параметром будет принимать массив DOM элементов, а вторым - текст. Сделайте так, чтобы данная функция добавляла текст в конец переданных элементов.
// function appendText(elems, text) {
// 	for (let elem of elems) {
// 		elem.textContent = elem.textContent + text;
// 	}
// }
// let elems = document.querySelectorAll('.elem');
// appendText(elems, '!');

// 353.2 Сделайте функцию appendElem, которая первым параметром будет принимать ссылку на DOM объект, в котором лежит тег ul, а вторым - текст. Сделайте так, чтобы данная функция создавала новую li с переданным текстом и добавляла ее в конец переданного тега ul.
// let ul = document.querySelector("#ul");
// function appendElem(ul, text) {
//     let li = document.createElement("li");
//     li.textContent = text;
//     ul.appendChild(li);
//   }
// appendElem(ul, "text")

// 353.3 Дан массив и ul. С помощью функции appendElem, созданной в предыдущей задаче, запишите каждый элемент массива в отдельную li в этом ul.
// let arr = ['1', '2', '3'];
// let ul = document.querySelector("#ul");
// function appendElem(ul, elem) {
//     for (let i = 0; i < 1; i++) {
//         let li = document.createElement("li");
//         li.textContent = elem;
//         ul.appendChild(li);                
//     }
//   }
// appendElem(ul, arr[0])
// appendElem(ul, arr[1])
// appendElem(ul, arr[2])

// 354.1 Допишите код представленной выше заготовки функции. Потестируйте работу готовой функции.
// let elem = document.querySelector('#elem');
// createTable(elem, 6, 3);
// function createTable(parent, cols, rows) {
// 	let table = document.createElement('table');
// 	for (let i = 0; i < rows; i++) {
// 		let tr = document.createElement('tr');
// 		for (let j = 0; j < cols; j++) {
// 			let td = document.createElement('td');
// 			tr.appendChild(td);
// 		}
// 		table.appendChild(tr);
// 	}
// 	parent.appendChild(table);
// }

// 355.1 Переделайте вашу функцию createTable в соответствии с описанным в теории.
// let elem = document.querySelector('#elem');
// createTable(elem, 6, 3);
// function createTable(parent, cols, rows) {
// 	let table = document.createElement('table');
//     table.style.color = 'red';
// 	for (let i = 0; i < rows; i++) {
// 		let tr = document.createElement('tr');
// 		for (let j = 0; j < cols; j++) {
// 			let td = document.createElement('td');
// 			tr.appendChild(td);
//             td.textContent=3245
// 		}
// 		table.appendChild(tr);

// 	}
// 	parent.appendChild(table);
// }

// 355.2 С помощью функции createTable создайте новую таблицу, а затем вставьте ее в конец дива.
// let elem = document.querySelector('#elem');
// createTable(elem, 6, 3);
// function createTable(parent, cols, rows) {
// 	let table = document.createElement('table');
// 	for (let i = 0; i < rows; i++) {
// 		let tr = document.createElement('tr');
// 		for (let j = 0; j < cols; j++) {
// 			let td = document.createElement('td');
// 			tr.appendChild(td);
// 		}
// 		table.appendChild(tr);
// 	}
// 	parent.appendChild(table);
// }

// 356.1 Реализуйте описанную функцию. Проверьте ее работу.
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let elem = document.querySelector('#elem');
// let table = createTableByArr(arr);
// function createTableByArr(parent) {
// 	let table = document.createElement('table');
// 	for (let i = 0; i < 3; i++) {
// 		let tr = document.createElement('tr');
// 		for (let j = 0; j < 3; j++) {
// 			let td = document.createElement('td');
// 			tr.appendChild(td);
// 		}
// 		table.appendChild(tr);
// 	}
// 	parent.appendChild(table);
// }




////////Модули через замыкания////////

// 359.1 Дана кнопка и три инпута, в которые вводятся числа. По нажатию на кнопку выведите в консоль сумму введенных чисел. Реализуйте задачу с помощью модуля.
// ;(function(selector1, selector2, selector3, selector4) {
//     let btn = document.querySelector(selector1);
// 	let inp1 = document.querySelector(selector2);
//     let inp2 = document.querySelector(selector3);
// 	let inp3 = document.querySelector(selector4);
// 	btn.addEventListener('click', function() {
//         console.log(inp1.value + inp2.value + inp3.value);
// 	});
// })('#inp1', '#inp2', '#inp3','#btn');

// 362.1 Экспортируйте наружу одну из переменных и две любые функции.
// ;(function() {
// 	let str1 = 'переменная модуля';
// 	let str2 = 'переменная модуля';
// 	let str3 = 'переменная модуля';
// 	function func1() {
// 		alert('функция модуля');
// 	}
// 	function func2() {
// 		alert('функция модуля');
// 	}
// 	function func3() {
// 		alert('функция модуля');
// 	}
//     window.str1= str1
//     window.func1= func1;
//     window.func3 = func3;
// })();
// alert(str1)
// func1();
// func3();

// 362.2 Экспортируйте наружу объект с первыми пятью функциями и первыми двумя переменными.
// ;(function() {
// let str1 = 'переменная модуля';
// let str2 = 'переменная модуля';
// let str3 = 'переменная модуля';
// function func1() {
// 	alert('функция модуля');
// }
// function func2() {
// 	alert('функция модуля');
// }
// function func3() {
// 	alert('функция модуля');
// }
// function func4() {
// 	alert('функция модуля');
// }
// function func5() {
// 	alert('функция модуля');
// }
// window.module = {func1, func2, func3, func4, func5, str1, str2}
// })();
// alert(module.func1(), module.func2(), module.func3(), module.func4(), module.func5(), alert(module.str1), alert(module.str2));

// 363.1 Оформите этот код в виде модуля. Эспортируйте наружу все функции, кроме вспомогательной.
// ;(function() {
// function avg1(arr) {
// 	return sum(arr, 1) / arr.length;
// }
// function avg2(arr) {
// 	return sum(arr, 2) / arr.length;
// }
// function avg3(arr) {
// 	return sum(arr, 3) / arr.length;
// }
// // вспомогательная функция
// function sum(arr, pow) {
// 	let res = 0;
// 	for (let elem of arr) {
// 		res += elem ** pow;
// 	}
// 	return res;
// }
// window.module = {avg1, avg2, avg3};
// })();

// 363.2 Изучите библиотеку underscore. Сделайте свою аналогичную библиотеку, повторив в ней 5-10 функций оригинальной библиотеки.
// ;(function() {
// function func1() {
// 	alert('text1');
// }
// function func2() {
// 	alert('text2');
// }
// function func3() {
// 	alert('text3');
// }
// function func4() {
// 	alert('text4');
// }
// function func5() {
// 	alert('text5');
// }
// function func6() {
// 	alert('text6');
// }
// function func7() {
// 	alert('text7');
// }
// function func8() {
// 	alert('text8');
// }
// function func9() {
// 	alert('text9');
// }
// function func10() {
// 	alert('text10');
// }
// window.module = {func1, func2, func3, func4, func5, func6, func7, func8, func9, func10}
// })();
// alert(module.func1(), module.func2(), module.func3(), module.func4(), module.func5(), module.func6(), module.func7(), module.func8(), module.func9(), module.func10());
