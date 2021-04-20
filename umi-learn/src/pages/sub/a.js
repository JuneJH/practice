import React from 'react';
import { withRouter,history  } from 'umi'

function a(props) {
    console.log(history )
    return (
        <div>
            SUb A 页面
            <span onClick={()=>{
                history.push("/")
            }}>回到首页</span>
        </div>
    )
}

export default withRouter(a)
