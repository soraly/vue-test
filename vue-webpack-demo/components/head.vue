<template>
    <div class="head">
        <h3>this is head</h3>
        <div>hello {{name}}</div>
        <div>父元素传来的数据是 {{childata.content}}</div>
        <p>还有{{children}}</p>
        <button @click="change()" class="btn btn-parimay">点我</button>

    </div>
</template>
<script>

    export default {
        props: ['childata','child2'],
        data(){
            return {
                'children': this.child2,
                'name': '小芬芬'
            }
        },
        components: {
        },
        mounted(){

        },
        methods: {
            change(){
                this.childata.content = 'heheheheh';
                this.children = '变化啦'
                console.log(this.childata.content,'22')
            }
        },
        computed:{

        }
    }
</script>
<style scoped="">
    .head {
        background: deepskyblue;
    }
</style>