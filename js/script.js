document.querySelector('.img__btn').addEventListener('click', function() {
	document.querySelector('.content').classList.toggle('s--signup')
})

function setCookie(cvalue,cvaluepassword){
	var d = new Date();
	
	document.cookie = "username="+escape(cvalue);
	document.cookie = "password="+escape(cvaluepassword);
}
function getCookie(cname){
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
		var c = ca[i].trim();
		if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
	}
	return "";
}
function checkCookie(){
	var user=getCookie("username");
	if (user!=""){
		alert("欢迎 " + user + " 再次访问");
		window.location.href="index.html"   
	}
	else {
		var user1 =  document.getElementById("USername").value;
		var Password = document.getElementById("Password1").value;
  		if (user=="" && user1!=null){
    		setCookie(user1,Password);
    	}
		window.location.href="index.html"   
	}
}

