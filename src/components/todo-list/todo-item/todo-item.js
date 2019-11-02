/**
 * Todo Item component
 */
import Vue from "vue";
import TodoItem from "./todo-item.vue";

export default Vue.component("todo-item", {
    render: h => h(TodoItem),
    props: ["todo"],
    methods: {
        onComments() {
            this.$emit("on-layout-change", "comments");
            console.log(this.todo);
        },
        onEdit() {
            this.$emit("on-layout-change", "edit", this.todo);
            console.log(this.todo);
        },
        onDelete() {
            console.log(this.todo);
        }
    }
});
