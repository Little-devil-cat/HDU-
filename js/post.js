var Name1;
var Inout;
var Money;
var Name2;
var Year;
var Month;
var Day;
var Type;

$(document).ready(function(){
const add1 = document.getElementById('add');
add1.addEventListener('click',e => {
	var midname1;
	midname1 = document.getElementById("user1");
	Name1 = midname1.value;
	midname1 = document.getElementById("select1");
	Inout = midname1.value;
	midname1 = document.getElementById("money1");
	Money = midname1.value;
	midname1 = document.getElementById("user2");
	Name2 = midname1.value;
	midname1 = document.getElementById("select2");
	Year = midname1.value;
	midname1 = document.getElementById("select3");
	Month = midname1.value;
	midname1 = document.getElementById("select4");
	Day = midname1.value;
	midname1 = document.getElementById("select5");
	Type = midname1.value;
    axios({
        method:'POST',
        url:'http://127.0.0.1:81/add',
		data: {
			name1: Name1,
			inout: Inout, 
			money: Money, 
			name2: Name2, 
			year: Year,
			month: Month,
			day: Day,
			type: Type
		}
    }).then(response =>{
		alert()
        console.log('/a1', response.data)
        return response.data
    }).catch(err =>{
        console.log('错误', error.message)
    })
})
});