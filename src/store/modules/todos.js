/**
 *  Todo items state handler
 */

import Vue from "vue";

const todos = [
    {
        id: 1,
        title: "title1",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis omnis ullam voluptates adipisci pariatur facilis incidunt consequatur fugiat, mollitia atque eveniet dolor eius quos magni reiciendis saepe sint officia esse!",
        dueDate: "",
        prioroty: 1,
        comments: []
    },
    {
        id: 2,
        title: "title2",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis omnis ullam voluptates adipisci pariatur facilis incidunt consequatur fugiat, mollitia atque eveniet dolor eius quos magni reiciendis saepe sint officia esse!",
        dueDate: "",
        prioroty: 1,
        comments: []
    },
    {
        id: 3,
        title: "title3",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis omnis ullam voluptates adipisci pariatur facilis incidunt consequatur fugiat, mollitia atque eveniet dolor eius quos magni reiciendis saepe sint officia esse!",
        dueDate: "",
        prioroty: 1,
        comments: []
    },
    {
        id: 4,
        title: "title4",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis omnis ullam voluptates adipisci pariatur facilis incidunt consequatur fugiat, mollitia atque eveniet dolor eius quos magni reiciendis saepe sint officia esse!",
        dueDate: "",
        prioroty: 1,
        comments: []
    },
    {
        id: 5,
        title: "title5",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis omnis ullam voluptates adipisci pariatur facilis incidunt consequatur fugiat, mollitia atque eveniet dolor eius quos magni reiciendis saepe sint officia esse!",
        dueDate: "",
        prioroty: 1,
        comments: []
    },
    {
        id: 6,
        title: "title6",
        description: "kskskksdhsdjsj",
        dueDate: "",
        prioroty: 1,
        comments: []
    },
    {
        id: 7,
        title: "title7",
        description: "kskskksdhsdjsj",
        dueDate: "",
        prioroty: 1,
        comments: []
    },
    {
        id: 8,
        title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis omnis ullam voluptates adipisci pariatur facilis incidunt Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis omnis ullam voluptates adipisci pariatur facilis incidunt consequatur fugiat Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis omnis ullam voluptates adipisci pariatur facilis incidunt consequatur fugiat Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis omnis ullam voluptates adipisci pariatur facilis incidunt consequatur fugiat Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis omnis ullam voluptates adipisci pariatur facilis incidunt consequatur fugiat Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis omnis ullam voluptates adipisci pariatur facilis incidunt consequatur fugiatconsequatur fugiat Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis omnis ullam voluptates adipisci pariatur facilis incidunt consequatur fugiat Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis omnis ullam voluptates adipisci pariatur facilis incidunt consequatur fugiat Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis omnis ullam voluptates adipisci pariatur facilis incidunt consequatur fugiat",
        description: "kskskksdhsdjsj",
        dueDate: "",
        prioroty: 1,
        comments: []
    },
    {
        id: 9,
        title: "title9",
        description: "kskskksdhsdjsj",
        dueDate: "",
        prioroty: 1,
        comments: []
    },
    {
        id: 10,
        title: "title10",
        description: "kskskksdhsdjsj",
        dueDate: "",
        prioroty: 1,
        comments: []
    },
    {
        id: 11,
        title: "title11",
        description: "kskskksdhsdjsj",
        dueDate: "",
        prioroty: 1,
        comments: []
    },
    {
        id: 12,
        title: "title12",
        description: "kskskksdhsdjsj",
        dueDate: "",
        prioroty: 1,
        comments: []
    },
    {
        id: 13,
        title: "title13",
        description: "kskskksdhsdjsj",
        dueDate: "",
        prioroty: 1,
        comments: []
    },
    {
        id: 14,
        title: "title14",
        description: "kskskksdhsdjsj",
        dueDate: "",
        prioroty: 1,
        comments: []
    },
    {
        id: 15,
        title: "title15",
        description: "kskskksdhsdjsj",
        dueDate: "",
        prioroty: 1,
        comments: []
    }
]

const state = {
    todos: [],
    error: "",
    status: ""
};

const actions = {
    getTodos(context) {
        let tasks = JSON.parse(localStorage.getItem("todos")) || [].concat(todos);
        context.commit("set_todos", tasks);
    },
    setTodo(context, todos) {
        localStorage.setItem("todos", JSON.stringify(todos));
        context.commit("set_todos", todos);
    }
};

const mutations = {
    set_todos(state, todos) {
        Vue.set(state, "error", "");
        Vue.set(state, "status", "success");
        Vue.set(state, "todos", todos);
    }
};

const getters = {
    todos: state => state.todos
}

export default {
    state,
    getters,
    actions,
    mutations
};