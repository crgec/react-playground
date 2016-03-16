import React, { Component, PropTypes } from 'react';
import ProtoBuf from 'protobufjs';
import paper, { Tool, Path } from 'paper';

class Annotation extends Component {
  componentDidMount() {
    // Create an empty project and a view for the canvas:
    paper.setup(this.refs.canvas);
    var tool = new Tool();
    var path;

    // Define a mousedown and mousedrag handler
    tool.onMouseDown = function(event) {
      path = new Path();
      path.strokeColor = 'black';
      path.add(event.point);
    }

    tool.onMouseDrag = function(event) {
      console.log(event);
      path.add(event.point);
    }
  }

  render() {
    // Scale the drawing area to match DPI.
    let width = '500px'
    let height = '500px';
    let style = {
      width: this.props.width,
      height: this.props.height
    };

    return (
      React.createElement('canvas', {
        ref: 'canvas',
        width: width,
        height: height,
        style: style })
    );
  }

}

export default Annotation;
