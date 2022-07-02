
const add1 = document.getElementById('add');
add1.addEventListener('click',e => {
    axios({
        method:'POST',
        url:'http://127.0.0.1:81/add',
		data: {
			name2: "小华",
			inout: "收入", 
			money: 300, 
			name1: "小明", 
			year: 2022,
			month: 3,
			day: 31,
			type: "工资"
		}
    }).then(response =>{
        console.log('/a1', response.data)
        return response.data
    }).catch(err =>{
        console.log('错误', error.message)
    })
})
