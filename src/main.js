// var say = require('./util');
// //webpack默认不支持es6，但是支持import export，所以改写前面的模块化写法
import say from './util';
import Vue from 'vue';
import './style/common.scss';

var app = new Vue({
	el: '#app',
	data: {
		message: 'hello vue'
	}
});

say();