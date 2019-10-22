/**
 * Todo Comments component
 */
import Vue from "vue";
import TodoComments from "./todo-comments.vue";

export default Vue.component("todo-comments", {
    render: h => h(TodoComments),
    methods: {
        onClose() {
            this.$emit("on-layout-change", "list");
        }
    }
});
