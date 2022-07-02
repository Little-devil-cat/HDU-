$(document).ready(function(){
const btn = document.getElementById('find');
btn.addEventListener('click',e => {
    axios({
        method:'get',
        url:'http://127.0.0.1:82/'
    }).then(response =>{
        console.log('/a1', response.data)
        return response.data
    }).catch(err =>{
        console.log('错误', error.message)
    })
})
});