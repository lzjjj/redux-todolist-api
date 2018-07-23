import axios from "axios"
import { checkItem, editItemContent, getAllItem, changeStatus, addItem } from '../Actions'
const globalUrl = "http://localhost:8080/api/todos"
export default {
    "getAllList": (dispatch) => axios.get(globalUrl)
        .then((res) => {
            dispatch(getAllItem(res.data._embedded.todos))
        })
        .catch((error) => {
            console.log(error);
        }),
    "toggleStatus": (dispatch, index, status) => axios.patch(globalUrl + '/' + index, {
        "status": status
    })
        .then((res) => {
            dispatch(checkItem(res.data,status))
        })
        .catch((error) => {
            console.log(error);
        }),
    "updateContent": (dispatch, index, content) => axios.patch(globalUrl + '/' + index, {
        "content": content
    })
        .then((res) => {
            dispatch(editItemContent(res.data))
        })
        .catch((error) => {
            console.log(error);
        }),
    "getListByStatus": (dispatch, status) => axios.get(globalUrl + '/search/statusOfTodos?status=' + status)
        .then((res) => {
            dispatch(changeStatus(status, res.data._embedded.todos))
        })
        .catch((error) => {
            console.log(error);
        }),
    "addTodo": (dispatch, item) => axios.post(globalUrl, item)
        .then((res) => {
            dispatch(addItem(res.data))
        })
        .catch((error) => {
            console.log(error);
        }),
}