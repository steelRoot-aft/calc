const buttonsBlock = document.querySelector('.calculator__bottom-body');

let a = '';
let b = '';
let c = '';
let sign = '';
let finish = false;

const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0','.',];
const calculation = ['+', '-', '*', '/'];

let out = document.querySelector('.calculator__top-nums');

buttonsBlock.addEventListener('click', function(event) {
	if (event.target.closest('.button')) {
		const key = event.target.textContent;
		if(key === 'AC') {
			a = '';
			b = '';
			sign = '';
			finish = false;
			out.textContent = 0;
		}
		if(nums.includes(key)) {
			if(b ==='' && sign ==='') {
				a += key;
				out.textContent = a;
			}else if(a !== '' && b !== '' && finish) {
				b = key;
				finish = false;
				out.textContent = b;
			}else {
				b += key;
				out.textContent = b;
			}

		}
	if(calculation.includes(key)) {
		sign = key;
		out.textContent = sign;
		return;
	}
		console.log(a, sign, b);
	if(key === '=') {
		if(sign === '+') {
			a = (+a) + (+b);
		}else if(sign === '-') {
			a = a - b;
		} else if (sign === '*') {
			a = a * b;
		} else if (sign === '/') {
			a = a / b;
		}
		out.textContent = a;
		finish = true;
	}
	}
});