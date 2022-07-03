//构造函数
function Router() {
	this.routes = {};
	this.currentURL = '';
}
//定义路由回调函数
Router.prototype.route = function(path, callback) {
	this.routes[path] = callback || function() {};
}
//定义路由更新时的调用函数
Router.prototype.refresh = function() {
	this.currentURL = location.hash.slice(1) || '/revise';
	try { //抛出路由不正确的路由
		this.routes[this.currentURL]();
	} catch (err) {
		alert("请输入合法路由");
	}
}
//路由初始化函数，添加监听事件
Router.prototype.init = function() {
	var that = this;
	if (window.addEventListener) {
		window.addEventListener("load", function() {
			that.refresh();
		}, false);
		if ("onhashchange" in window.document.body) {
			window.addEventListener("hashchange", function() {
				that.refresh();
			}, false)
		} else {
			onhashchange_compatibility(that);
		}
	} else if (window.attachEvent) { //ie低版本兼容
		window.attachEvent("onload", function() {
			that.refresh();
		}, false);
		window.attachEvent("onhashchange", function() {
			that.refresh();
		}, false)
		onhashchange_compatibility(that);
	}
	//bind()函数IE8以下不支持
	// window.addEventListener('load',this.refresh.bind(this),false);
	// window.addEventListener('hashchange',this.refresh.bind(this),false);
}

//轮询url的变化
function onhashchange_compatibility(that) {
	var location = window.location,
		oldURL = location.href,
		oldHash = location.hash;
	// 每隔100ms检查hash是否发生变化
	setInterval(function() {
		var newHash = location.hash;
		if (newHash != oldHash) {
			that.refresh();
			oldURL = location.href;
			oldHash = newHash;
		}
	}, 100);
}

//自定义路由更新时的回调函数
function display_page(id) {
	var el = document.getElementsByClassName("content");
	for (var i = 0; i < el.length; i++) {
		el[i].style.display = "none";
	}
	el[id].style.display = "block";
}

window.Router = new Router();
//将合法路由以及执行的回调函数写入routes
Router.route('/revise', function() {
	display_page(0);
})
Router.route('/statistics', function() {
	display_page(1);
})
Router.route('/dataentry', function() {
	display_page(2);
})

//初始化
window.Router.init();
