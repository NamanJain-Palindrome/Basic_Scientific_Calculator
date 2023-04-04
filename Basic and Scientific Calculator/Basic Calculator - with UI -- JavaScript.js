function val(result)
{
	form.disp.value = form.disp.value + result;
}

function calculate()
{
	if(form.disp.value == "")
	{
		alert("Please Enter Numbers");
	}
	else
	{
		form.disp.value = eval(form.disp.value);
	}
}


function clr()
{
	form.disp.value = "";
}

function fsin()
{
	num = form.disp.value;
	//num = document.getElementById('disp').value;  //this can also be used, instead of the above statement
	result = Math.sin(parseFloat(num));
	form.disp.value = result;
}

function fcos()
{
	num = form.disp.value;
	//num = document.getElementById('disp').value;  //this can also be used, instead of the above statement
	result = Math.cos(parseFloat(num));
	form.disp.value = result;
}

function ftan()
{
	num = form.disp.value;
	//num = document.getElementById('disp').value;  //this can also be used, instead of the above statement
	result = Math.tan(parseFloat(num));
	form.disp.value = result;
}

function flog()
{
	num = form.disp.value;
	//num = document.getElementById('disp').value;  //this can also be used, instead of the above statement
	result = Math.log(parseFloat(num));
	form.disp.value = result;
}

/*
var btn = form.veql;
btn.addEventListener('dbclick',function()
{
	form.disp.value = ""; //when we click on equal button double times, then the result will get clear
});
*/
