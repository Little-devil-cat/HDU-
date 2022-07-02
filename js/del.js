$(document).ready(function() {
	document.getElementById("find").addEventListener("click", Del);
	function Del() {
		axios({
			method: 'delete',
			url: 'http://127.0.0.1:81/del',
		}).then(response => {
			console.log('/a1', response.data)
			return response.data
		}).catch(err => {
			console.log('错误', error.message)
		})
	}
});