$(document).ready(function() {
	document.getElementById("find").addEventListener("click", Get);
	function Get() {
		axios({
			method: 'get',
			url: 'http://127.0.0.1:81/find'
		}).then(response => {
			console.log('/a1', response.data)
			return response.data
		}).catch(err => {
			console.log('错误', error.message)
		})
	}
});
