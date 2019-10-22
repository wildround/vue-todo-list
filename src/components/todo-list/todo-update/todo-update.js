/**
 * Todo Update list component
 */
import Vue from "vue";
import TodoUpdate from "./todo-update.vue";

/**
 *  Component responsible to displaying Update & New tasks layouts
 */
export default Vue.component("todo-update", {
    render: h => h(TodoUpdate),
    props: ["layout", "todo"],
    methods: {
        onClose() {
            this.$emit("on-layout-change", "list");
        }
    }
});
