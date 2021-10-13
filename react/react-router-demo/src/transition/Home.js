import React from 'react'

function Home(props,ref) {
    return (
        <div className="container" ref={ref}>
            <h1>Home</h1>
        </div>
    )
}
export default React.forwardRef(Home)