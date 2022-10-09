import {createStore} from "vuex";
import {increment} from "@/store/increment";

const index = createStore({
    state() {
        return {
            count: 0,
            name: 'leilei',
            todos: [
                {id: 1, text: '...', done: true},
                {id: 2, text: '...', done: true}
            ]
        }
    },
    mutations: {
        [increment](state, player) {
            state.count += player.n
        }
    }, getters: {
        doneToto(state) {
            return state.todos.filter(todo => todo.done === true).length
        }
    }, actions: {
        increment({commit}){
            commit({type:increment,n:50})
            setTimeout(()=>{
                commit({type:increment,n:50})
            },1000)
        }
    }
})

export default index