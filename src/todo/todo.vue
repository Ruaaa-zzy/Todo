<template>
    <div class="real-app">
        <input type="text" class="add-input" autofocus="autofocus" placeholder="接下来要做什么！" @keyup.enter="addTodo" >
        <Item :todo="todo" v-for="todo in filteredTodos" :key="todo.id" @del="deleteTodo" />
        <Tabs :filter="filter" :todos="todos" @toggle='toggleFiter' @clearCompleted="clearAllCompleted"/>
    </div> 
</template>


<script>
import Item from './item.vue';
import Tabs from './Tabs.vue';
let i = 0;

export default {
    //定义数据
    data (){
        return{
            todos:[],
            filter: 'all'
        }
    },//定义方法
    methods: {
        addTodo (e) {
            this.todos.unshift({
                id: i++,
                content: e.target.value.trim(),
                completed: false
            })
            e.target.value = '';
        },//删除TODO
        deleteTodo(id){
            this.todos.splice(this.todos.findIndex(todo=>todo.id === id),1);
        },//切换列表
        toggleFiter(state){
            this.filter = state;
        },
        clearAllCompleted() {
            this.todos = this.todos.filter(todo => !todo.completed);
        }
    },//计算参数
    computed: {
        //判断状态修改列表
        filteredTodos() {
            //首先判断如果为ALL则获取所有列表，如果为其他则按照对应状态做匹配
            if(this.filter === 'all'){
                return this.todos;
            }
            const completed = this.filter === 'completed';
            return this.todos.filter(todo => todo.completed === completed);
        }
    },
    //子组件
    components: {
        Item,
        Tabs
    }
}
</script>



<style lang="stylus" scoped>
.real-app {
        width 600px
        margin 0 auto
        box-shadow 0 0 5px #666
    }

    .add-input {
        position: relative;
        margin: 0;
        width: 100%;
        font-size: 20px;
        font-family: inherit;
        font-weight: inherit;
        line-height: 1.4em;
        outline: none;
        color: inherit;
        box-sizing: border-box;
        font-smoothing: antialiased;
        padding: 16px 16px 16px 36px;
        border: none;
        box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
    }
</style>