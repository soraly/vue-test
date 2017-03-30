<template>
    <div>
        <hhh :childata="word" :child2="word2"></hhh>
        <h3>this is vue</h3>
        <div class="name" >hello , {{name}}</div>
        <div>父元素的数据 {{word.content}}</div>

    </div>
</template>
<script>
    import head from './components/head.vue';
    import Vue from 'vue/dist/vue';


    export default {
        beforeCreate(){
            console.log(111,'33');
            Vue.component('Hom',{
                template: '<div>this is home</div>'
            })
        },
        data(){
            return {
                name: 'xiang',
                word: {
                    content: 'we will be better'
                },
                word2: 'this is parent 的 word2'
            }
        },
        components: {
            "hhh": head
        }
    }
</script>
<style>
    .name {
        background: skyblue;
    }
</style>