import createAcionts from './redux/student'
import {connect} from 'react-redux'
import List from './List'


function mapState2Props(state){
    return {

    }
}

function mapDispatch2Props(dispatch){
    return {
        getData(){
            dispatch(createAcionts.createGetStudents())
        }
    }
}

export default connect(mapState2Props,mapDispatch2Props)(List)