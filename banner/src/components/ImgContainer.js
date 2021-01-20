import React, { Component } from 'react';
import PropTypes from "prop-types"

export default class ImgContainer extends Component {
    static propsTypes = {
        imgSrcs: PropTypes.arrayOf(PropTypes.string).isRequired,
        imgWidth: PropTypes.number.isRequired,
        imgHeight: PropTypes.number.isRequired,
        duration: PropTypes.number.isRequired,
    }
    imgContainerRef = React.createRef();
    tick = 16;
    timer = null;

    changeContinerPosition(index) {
        console.log(this.props.imgSrcs.length)
        if (index < 0) {
            index = this.props.imgSrcs.length - 1
        } else if (index > this.props.imgSrcs.length - 1) {
            index = 0;
        }

        const targetLeft = - index * this.props.imgWidth;

        let currentLeft = parseFloat(window.getComputedStyle(this.imgContainerRef.current).marginLeft);

        const count = Math.ceil(this.props.duration / this.tick);

        let currentCount = 0;

        const dis = (targetLeft - currentLeft) / count;

        clearInterval(this.timer);
        this.timer = setInterval(()=>{
            currentCount ++;
            currentLeft += dis;
            this.imgContainerRef.current.style.marginLeft = currentLeft + "px";
            if(currentCount === count){
                clearInterval(this.timer);
                this.imgContainerRef.current.style.marginLeft = targetLeft + "px";
            }
            
        },this.tick)
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    render() {
        const imgs = this.props.imgSrcs.map((src, i) => <img
            src={src}
            key={i}
            alt={i}
            style={{
                width: this.props.imgWidth,
                height: this.props.imgHeight,
                float: 'left',
            }} />)
        return (
                <div
                    className="img-container"
                    ref={this.imgContainerRef}
                    style={{
                        width: this.props.imgWidth * this.props.imgSrcs.length,
                        height: this.props.imgHeight
                    }}
                >
                    {imgs}


                </div>
        )
    }
}
