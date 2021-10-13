import createAcionts from './redux/student'
import {connect} from '../react-redux-code'
import List from './List'


function mapState2Props(state){
    return {
        data:state.students,
        loading:state.loading,
        condition:state.condition
    }
}

function mapDispatch2Props(dispatch){
    return {
        getData(){
            dispatch(createAcionts.createGetStudents())
        },
        pageAdd(pageer){
            dispatch(createAcionts.createCondition(pageer))
            dispatch(createAcionts.createGetStudents())
        }
    }
}

export default connect(mapState2Props,mapDispatch2Props)(List)