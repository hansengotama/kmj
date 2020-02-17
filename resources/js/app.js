import Vue from 'vue'
import router from './../router/index'
import App from './../views/App'

new Vue({
    router,
    components: {App}
}).$mount('#app');require('./bootstrap');
