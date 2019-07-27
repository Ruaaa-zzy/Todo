<template>
<!-- 按钮组 -->
    <div class="helper">
        <span class="left">{{unFinishedTodoLength}}&nbsp;item left</span>
        <span class="tabs">
            <span v-for="state in states" :key="state" @click="toggleFiter(state)" :class="[filter === state?'active': '']" > {{state}}</span>
        </span>
        <span class="clear" @click="clearAllCompleted">clear&nbsp;completed</span>
    </div>
</template>

<script>
export default {
    //父级传输的数据
    props: {
        //数据
        filter: {
            types: String,
            required: true
        },
        todos: {
            types: Array,
            required: true
        }
    },
    //方法
    methods: {
        //清除
        clearAllCompleted(){
            this.$emit('clearCompleted');
        },
        //按钮点击事件
        toggleFiter(state){
            this.$emit('toggle',state);
        }

    },
    //当前页面的数据
    data(){
        return{
            states: ['all','active','completed']
        }
    },
    //监控的数据
    computed: {
        //获取列表数量
        unFinishedTodoLength(){
            return this.todos.filter(todo => !todo.computed).length
        }
    }
}
</script>

<style lang="stylus" scoped>
 .helper {
        font-weight 100
        display flex
        justify-content space-between
        padding 5px 0
        line-height 30px
        background-color #ffffff
        font-size 14px
        font-smoothing: antialiased;
    }

    .left, .clear, .tabs {
        padding 0 10px
        box-sizing border-box
    }

    .left, .clear {
        width 150px
    }

    .left {
        text-align left
    }

    .clear {
        text-align: right
        cursor pointer
    }

    .tabs {
        width 200px
        display flex
        justify-content space-around
        * {
            display inline-block
            padding 0 10px
            cursor pointer
            border 1px solid rgba(175, 47, 47, 0)
            &.active {
                border-color rgba(100, 100, 100, 0.3)
                border-radius 7px
            }
        }
    }

</style>