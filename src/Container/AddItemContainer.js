import { connect } from 'react-redux'
import AddItem from "../compoments/AddItem"
import TodoApi from '../Api/HttpApi'
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddItem: (item) => {
            TodoApi.addTodo(dispatch, item)
        }
    }
}

export default connect(null, mapDispatchToProps)(AddItem)