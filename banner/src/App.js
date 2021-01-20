import './App.css';
import PropTypes from "prop-types";
import ImgContainer from './components/ImgContainer'

import React, { Component } from 'react'

export default class App extends Component {
  static propsTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    imgSrcs: PropTypes.arrayOf(PropTypes.string).isRequired,
    autoDuration: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
  }
  static defaultProps = {
    width: 520,
    height: 280,
    imgSrcs: [],
    autoDuration: 3000,
    duration: 500
  }
  state={
    currentIndex:0
  }
  imgRef = null;
  getRef=(ref) =>{
    this.imgRef = ref;
  }

  
  render() {
    return (
      <div className="banner-container" style={{ width: this.props.width }}>
        <ImgContainer
          ref={this.getRef}
          imgSrcs={this.props.imgSrcs}
          imgWidth={this.props.width}
          imgHeight={this.props.height}
          duration={this.props.duration}
        />
        <button onClick={()=>{
          this.setState({
            currentIndex:this.state.currentIndex + 1
          },()=>{
            this.imgRef.changeContinerPosition(this.state.currentIndex)
          })
        }}>left</button>
      </div>
    )
  }
}

