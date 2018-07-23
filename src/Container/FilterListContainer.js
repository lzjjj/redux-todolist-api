import { connect } from 'react-redux'
import FilterList from "../compoments/FilterList"
import TodoApi from "../Api/HttpApi"

const mapStateToProps = (state, ownProps) => {
    return {
        status: state.status
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onChangeStatus: (status) => {
            TodoApi.getListByStatus(dispatch,status)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterList)