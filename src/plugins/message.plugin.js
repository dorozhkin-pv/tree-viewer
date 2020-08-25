import Vue from 'vue';
export default {
	install(Vue, options) {
		Vue.prototype.$message = function({text, alert = false}) {
			let color = alert ? '#01579b' : '#26a69a';
			window.M.toast({ html: text }).el.style.backgroundColor = color;
		}
	}
}