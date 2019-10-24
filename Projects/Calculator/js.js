var oneBtn      = document.getElementById('calc-one');
var twoBtn      = document.getElementById('calc-two');
var threeBtn    = document.getElementById('calc-three');
var fourBtn     = document.getElementById('calc-four');
var fiveBtn     = document.getElementById('calc-five');
var sixBtn      = document.getElementById('calc-six');
var sevenBtn    = document.getElementById('calc-seven');
var eightBtn    = document.getElementById('calc-eight');
var nineBtn     = document.getElementById('calc-nine');
var zeroBtn     = document.getElementById('calc-zero');

var decimalBtn  	  = document.getElementById('calc-decimal');
var clearBtn    	  = document.getElementById('calc-clear');
var backspaceBtn 	  = document.getElementById('calc-backspace');
var displayValElement = document.getElementById('calc-display-val');

var calcNumBtns 	 = document.getElementsByClassName('calc-btn-num');
var calcOperatorBtns = document.getElementsByClassName('calc-btn-operator');

var displayVal = '0';
var pendingVal;
var StringArray = [];


var updateDisplayVal = (clickObj) =>
{	//obtain the text of the button and store in btnText
	var btnText = clickObj.target.innerText;
	if(displayVal == '0')
		displayVal = '';
	displayVal += btnText;
	displayValElement.innerText = displayVal;
}
//Switch stagements for operation buttons
var performOperation = (clickObj) =>
{
	var operator = clickObj.target.innerText;
	switch (operator)
	{
		case '+':
			//store the value before the operator into pendingVal
			pendingVal = displayVal;
			//set the display to zero
			displayVal = '0';
			displayValElement.innerText = displayVal;
			//push pendingVal plus the operator into the array/stack
			StringArray.push(pendingVal);
			StringArray.push('+')
		break;
		case '-':
			pendingVal = displayVal;
			displayVal = '0';
			displayValElement.innerText = displayVal;
			StringArray.push(pendingVal);
			StringArray.push('-')
		break;
		case 'x':
			pendingVal = displayVal;
			displayVal = '0';
			displayValElement.innerText = displayVal;
			StringArray.push(pendingVal);
			StringArray.push('*')
		break;
		case '/':
			pendingVal = displayVal;
			displayVal = '0';
			displayValElement.innerText = displayVal;
			StringArray.push(pendingVal);
			StringArray.push('/')
		break;
		case '=':
		StringArray.push(displayVal);
		var evaluation = eval(StringArray.join(' '));
		displayVal = evaluation + '';
		displayValElement.innerText = displayVal;
		StringArray= [];
		break;
	}
}
for (var i = 0; i < calcNumBtns.length; i++)
{
	//whenever a number is clicked run the updateDisplayVal function
    calcNumBtns[i].addEventListener('click', updateDisplayVal, false)
}
for (var z = 0; z < calcOperatorBtns.length; z++)
{
	//whenever an operator is clicked run the perfornOperation function
	calcOperatorBtns[z].addEventListener('click', performOperation, false)
}
clearBtn.onclick = () =>
{
	displayVal = '0'
	pendingVal = undefined;
	StringArray = [];
	displayValElement.innerHTML = displayVal;
}
backspaceBtn.onclick = () =>
{
	// let displayVal only include the 0th element to its size-1th element
	var lenghtOfDisplayVal = displayVal.length;
	displayVal = displayVal.slice(0, lenghtOfDisplayVal - 1);

	//if displayVal is empty then display 0
	if(displayVal == '')
		displayVal = '0';

	displayValElement.innerText = displayVal;
}
decimalBtn.onclick = () =>
{
	//if there isnt already a decimal then insert it
	if(!displayVal.includes('.'))
	{
		displayVal += '.';
	 displayValElement.innerText = displayVal;
	}
}
