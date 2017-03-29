
console.log(77);

import Vue from 'vue/dist/vue'
import app from './app.vue'
console.log(Vue,'Vue')
new Vue({
    el: '#box',
    components: {
        'app': app
    }
})