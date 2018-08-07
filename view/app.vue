<template>
	<div class="component_view">
		<div class="app_header">
			<div class="app_header_content">开发进行中...&nbsp;&nbsp;&nbsp;&nbsp;(挖坑、填坑、挖新坑)</div>
		</div>
		<div class="main_container">
			<div class="common_container">
				<button class="comm_button" @click="gotoOuterWebsite('https://www.aliyun.com/')">阿里云</button>
				<button class="comm_button" @click="gotoOuterWebsite('https://github.com/')">gitHubs</button>
				<button class="comm_button" @click="gotoOuterWebsite('https://gitee.com/')">gitee</button>
				<button class="comm_button" @click="gotoOuterWebsite('https://codeigniter.org.cn/user_guide/index.html')">CI API</button>
				<button class="comm_button" @click="gotoOuterWebsite('https://mp.weixin.qq.com/debug/wxadoc/dev/')">小程序</button>
			</div>

			<div class="common_container">
				<button class="comm_button" @click="gotoOuterWebsite('https://bce.baidu.com/solution/video.html')">百度云解决方案</button>
				<button class="comm_button" @click="gotoOuterWebsite('https://www.qcloud.com/solution/video.html')">腾讯云解决方案</button>
				<button class="comm_button" @click="gotoOuterWebsite('https://www.aliyun.com/solution/media')">阿里云解决方案</button>
				<button class="comm_button" @click="gotoOuterWebsite('https://v.ksyun.com/')">金山云解决方案</button>
			</div>

			<div class="common_container">
				<button class="comm_button" @click="gotoOuterWebsite('http://www.w3school.com.cn/js/js_obj_regexp.asp')">JS正则式</button>
				<button class="comm_button" @click="gotoOuterWebsite('http://www.jasongj.com/tags/Design-Pattern/')">设计模式</button>
				<button class="comm_button" @click="gotoOuterWebsite('https://golang.org/dl/')">golang</button>
				<button class="comm_button" @click="gotoOuterWebsite('http://www.runoob.com/python3/python3-tutorial.html')">Python</button>
				<button class="comm_button" @click="gotoOuterWebsite('http://www.w3school.com.cn/')">W3C学习</button>
				<button class="comm_button" @click="gotoOuterWebsite('http://www.w3school.com.cn/cssref/index.asp')">CSS手册</button>

			</div>
		</div>

	</div>
</template>

<script>
	module.exports = {
		name: "app",
		data: function() {
			return {}
		},
		created: function() {},
		mounted: function() {},
		methods: {
			compile: function() {

			},
			testPass: function() {

			},
			testFail: function() {

			},
			gotoOuterWebsite: function(_url) {
				window.open(_url);
			}
		}
	}
</script>

<style scoped="scoped">

</style>