import { connect } from 'react-redux'
import TodoList from "../compoments/TodoList"
import TodoApi from "../Api/HttpApi"
const mapStateToProps = (state, ownProps) => {
    let {match} = ownProps
    return {
        status:match.params.status,
        todoList: state.todoList
    }

}
const mapDispatchToProps = (dispatch, ownProps) => {
   
    return {
        onCheckItem: (id, status) => {
            TodoApi.toggleStatus(dispatch, id, status)
        },
        onEditItemContent: (id, content) => {
            TodoApi.updateContent(dispatch,id,content)
        },
        onGetAllItem: () => {
            TodoApi.getAllList(dispatch);

        },
        onChangeStatus: (status) => {
            TodoApi.getListByStatus(dispatch,status)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)