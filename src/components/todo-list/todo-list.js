/**
 * Todo list component
 */
import Vue from "vue";
import TodoComments from "./todo-comments/todo-comments.vue";
import TodoUpdate from "./todo-update/todo-update.vue";
import TodoItem from "./todo-item/todo-item.vue";
import TodoList from "./todo-list.vue";

export default Vue.component("todo-list", {
    render: h => h(TodoList),
    components: {
        TodoUpdate,
        TodoComments,
        TodoItem
    },
    data() {
        return {
            layout: "list"
        }
    },
    computed: {
        todos() {
            return this.$store.getters.todos;
        }
    },
    mounted() {
        this.$store.dispatch("getTodos");
    },
    methods: {
        addNewTask() {
            this.layout = "new";
        },
        onClose() {
            this.layout = "list";
        },
        onLayoutChange(layout) {
            this.layout = layout;
        }
    }
});
