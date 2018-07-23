import * as types from '../Constants/ActionTypes'
export default (state = {
    todoList: [],
    status: types.ALL
}, action) => {

    switch (action.type) {
        case types.ADD:
            {
                return {
                    todoList: [...state.todoList, action.item],
                    status: state.status
                }
            }
        case types.ALLLIST:
            {
                return {
                    todoList: [...action.todoList],
                    status: state.status
                }
            }
        case types.CHECK:
            {
                let list = [...state.todoList]
                list.find(i => i.id === action.item.id).status = action.item.status
                if(state.status!=="completed,active"){
                    list = list.filter(i => i.status === state.status)
                }
                return {
                    todoList: list,
                    status: state.status
                }
            }
        case types.STATUS:
            {
                return {
                    todoList: [...action.todoList],
                    status: action.status
                }
            }
        case types.EDIT:
            {
                let todoList = [...state.todoList]
                todoList.find(i => i.id === action.item.id).content = action.item.content
                return {
                    todoList: todoList,
                    status: state.status
                }
            }

        default:
            return state
    }
}