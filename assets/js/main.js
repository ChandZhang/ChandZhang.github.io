requirejs.config({
	baseUrl: "assets/js",
	waitSeconds: 15,
	paths: {
		"jquery": "jquery/jquery-3.3.1.min",
		"vue": "vue/vue.min",
		"vuerouter": "vue/vue-router.min",
		"httpVueLoader": "vue/httpVueLoader.min",
		"toast": "toast/toast.min",
	},
	shim: {
		"jquery": {
			deps: []
		},
		"vue": {
			exports: "vue",
			deps: []
		},
		"vuerouter": {
			exports: "VueRouter",
			deps: ['vue']
		},
		"httpVueLoader": {
			exports: "httpVueLoader",
			deps: []
		},
		"toast": {
			exports: "toast",
			deps: ['jquery']
		}
	}
});

//项目启动文件
requirejs(["vue", "vuerouter", "httpVueLoader", "jquery","toast"], function(Vue, VueRouter, httpVueLoader, jquery,toast) {

	console.log("VUE : " + Vue.version);
	window.toast = toast;
	Vue.config.silent = true;
	Vue.config.performance = true;
	Vue.config.warnHandler = function(msg, vm, trace) {}
	Vue.config.errorHandler = function(err, vm, info) {}

	Vue.use(VueRouter);
	Vue.use(httpVueLoader);

	//TODO Router
	var routes = [{
		path: '/',
		component: httpVueLoader('view/app.vue'),
		meta: {}
	}];

	var router = new VueRouter({
		routes: routes
	});

	var vm = new Vue({
		router: router,
		currentRoute: window.location.pathname
	}).$mount('#mainContainer');
});

