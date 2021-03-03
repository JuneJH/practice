import React from 'react'

 function Page2(props,ref) {
    return (
        <div className="container" style={{backgroundColor:"orange"}} ref={ref}>
            <h1>Page2</h1>
        </div>
    )
}
export default React.forwardRef(Page2)