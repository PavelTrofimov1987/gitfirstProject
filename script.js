let num = 50;

if (num <49){
	console.log('Неверно!')
} else if (num >100){
	console.log('Много!')
}else {
	console.log('Верно!')
} /* 1-й способ написания кода сверки */

(num ==50) ? console.log('Verno!') : console.log('Neverno!'); /* 2-ой способ написания сверки */

switch (num){
	case num <49:
		console.log('Neverno');
		break;
	case num > 100:
		console.log('Mnogo!');
		break;
	case num > 80:
		console.log('Vse eshe mnogo!');
		break;
	case 50:
		console.log('Verno!!');
		break;
}