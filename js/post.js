var Name1;
var Inout;
var Money;
var Name2;
var Year;
var Month;
var Day;
var Type;
var tabledata;

$(document).ready(function() {
	gettable();

	function gettable() {
		axios({
			method: 'get',
			url: 'http://127.0.0.1:81/find',
			params: {
				"amount":300
			}
		}).then(response => {
			console.log('get', response.data)
			tabledata = response.data.data;
			initTable();
		}).catch(err => {
			console.log(err)
		})
		function initTable() {
			var parentDiv = document.getElementById("content");
			var div2= document.getElementById("table1");
			parentDiv.removeChild(div2);
			var html = '<table  cellspacing="0" id="table1">';
			html += '<tr>';
			html += '<th id="ID">id</th>'
			html += '<th>用户1</th>'
			html += '<th>收入/支出</th>';
			html += '<th>用户2</th>';
			html += '<th>金额</th>';
			html += '<th>日期</th>';
			html += '<th>收支种类</th>';
			html += '<th id="check"></th>';
			html += '</tr>'
			for (var j in tabledata) {
				var obj = tabledata[j];
				console.log(obj.id)
				html += '<tr>'
				html += '<td id="ID">' + obj.id + '</td>';
				html += '<td>' + obj.uname1 + '</td>';
				html += '<td>' + obj.in_or_out + '</td>';
				html += '<td>' + obj.uname2 + '</td>';
				html += '<td>' + obj.amount + '</td>';
				html += '<td>' + obj.date + '</td>';
				html += '<td>' + obj.kind + '</td>';
				html += '<td id="check"><input type="checkbox" /></td>';
				html += '</tr>'
			}
			html += '</table>';
			$('#content').append(html);
		}
		
	}
	
	const add1 = document.getElementById('add');
	add1.addEventListener('click', e => {
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
			method: 'post',
			url: 'http://127.0.0.1:81/add',
			data: {
				uname1: Name1,
				in_or_out: Inout,
				amount: Money,
				uname2: Name2,
				year: Year,
				month: Month,
				day: Day,
				kind: Type
			}
		}).then(response => {
			alert("添加成功");
			console.log('add', response.data);
			initTable();
		}).catch(err => {
			alert("添加失败");
			console.log('错误', error.message);
		})
		function initTable() {
			var parentDiv = document.getElementById("content");
			var div2= document.getElementById("table1");
			parentDiv.removeChild(div2);
			var html = '<table  cellspacing="0" id="table1">';
			html += '<tr>';
			html += '<th id="ID">id</th>'
			html += '<th>用户1</th>'
			html += '<th>收入/支出</th>';
			html += '<th>用户2</th>';
			html += '<th>金额</th>';
			html += '<th>日期</th>';
			html += '<th>收支种类</th>';
			html += '<th id="check"></th>';
			html += '</tr>'
			for (var j in tabledata) {
				var obj = tabledata[j];
				console.log(obj.id)
				html += '<tr>'
				html += '<td id="ID">' + obj.id + '</td>';
				html += '<td>' + obj.uname1 + '</td>';
				html += '<td>' + obj.in_or_out + '</td>';
				html += '<td>' + obj.uname2 + '</td>';
				html += '<td>' + obj.amount + '</td>';
				html += '<td>' + obj.date + '</td>';
				html += '<td>' + obj.kind + '</td>';
				html += '<td id="check"><input type="checkbox" /></td>';
				html += '</tr>'
			}
			html += '</table>';
			$('#content').append(html);
		}
		
	})

	const find1 = document.getElementById('find')
	find1.addEventListener('click', e => {
		var mid;
		mid = document.getElementById("user1");
		Name1 = mid.value;
		mid = document.getElementById("select1");
		Inout = mid.value;
		mid = document.getElementById("money1");
		Money = mid.value;
		mid = document.getElementById("user2");
		Name2 = mid.value;
		mid = document.getElementById("select2");
		Year = mid.value;
		mid = document.getElementById("select3");
		Month = mid.value;
		mid = document.getElementById("select4");
		Day = mid.value;
		mid = document.getElementById("select5");
		Type = mid.value;
		axios({
			method: 'get',
			url: 'http://127.0.0.1:81/find',
			data: {
				uname1: Name1,
				in_or_out: Inout,
				amount: Money,
				uname2: Name2,
				year: Year,
				month: Month,
				day: Day,
				kind: Type
			}
		}).then(response => {
			alert("查找成功");
			console.log('find', response.data);
			initTable();
		}).catch(err => {
			alert("查找失败");
			console.log('错误');
		})
		function initTable() {
			var parentDiv = document.getElementById("content");
			var div2= document.getElementById("table1");
			parentDiv.removeChild(div2);
			var html = '<table  cellspacing="0" id="table1">';
			html += '<tr>';
			html += '<th id="ID">id</th>'
			html += '<th>用户1</th>'
			html += '<th>收入/支出</th>';
			html += '<th>用户2</th>';
			html += '<th>金额</th>';
			html += '<th>日期</th>';
			html += '<th>收支种类</th>';
			html += '<th id="check"></th>';
			html += '</tr>'
			for (var j in tabledata) {
				var obj = tabledata[j];
				console.log(obj.id)
				html += '<tr>'
				html += '<td id="ID">' + obj.id + '</td>';
				html += '<td>' + obj.uname1 + '</td>';
				html += '<td>' + obj.in_or_out + '</td>';
				html += '<td>' + obj.uname2 + '</td>';
				html += '<td>' + obj.amount + '</td>';
				html += '<td>' + obj.date + '</td>';
				html += '<td>' + obj.kind + '</td>';
				html += '<td id="check"><input type="checkbox" /></td>';
				html += '</tr>'
			}
			html += '</table>';
			$('#content').append(html);
		}
		
	})

	const del1 = document.getElementById("del")
	del1.addEventListener('click', e => {
		axios({
			method: 'delete',
			url: 'http://127.0.0.1:81/del',
		}).then(response => {
			alert("删除成功");
			console.log('del', response.data);
			inittable();
		}).catch(err => {
			alert("删除失败");
			console.log('错误');
		})
	})
});