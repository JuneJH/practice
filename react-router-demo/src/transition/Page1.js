import React from 'react'

 function Page1(props,ref) {
    return (
        <div className="container" style={{backgroundColor:"yellow"}} ref={ref}>
            <h1>Page1</h1>
        </div>
    )
}

export default React.forwardRef(Page1)
