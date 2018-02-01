// var say = require('./util');
// //webpack默认不支持es6，但是支持import export，所以改写前面的模块化写法
import getData from './util';
import Vue from 'vue';

import './style/common.scss';

Vue.component('my-component', {
  template: '<img :src="url" />',
  data() {
    return {
      url: require('./img/logo2.png')
    }
  }
})

var app = new Vue({
	el: '#app',
	data: {
		message: 'hello vue'
	},
	methods: {
		async fetchData(){
			const data = await getData();
			this.message = data;
		}
	},
	created(){
		this.fetchData();
	}
});

