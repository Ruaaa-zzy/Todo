import Vue from 'vue';
import App from './app.vue';
import './asserts/styles/global.styl';


//加载
const root = document.createElement('div');
document.body.appendChild(root);


new Vue ({
    render: (h) => h(App)
}).$mount(root);