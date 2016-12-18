import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "materialize-css/dist/css/materialize.css";
import jquery from 'jquery';
import hammer from 'hammerjs';

window.$ = window.jQuery = jquery;
window.Hammer = hammer;

require("../utils/jqueryHammerLoader.js");
require("materialize-css/js/sideNav.js");

class SideNav extends Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
      $(ReactDOM.findDOMNode(this.refs.control)).sideNav();
  }

  componentWillUnMount(){
      $(ReactDOM.findDOMNode(this.refs.control)).sideNav('destroy');
  }

  render(){
    return <div>
      <div id="slide-out" className="side-nav">
         {this.props.children}
     </div>
     <a style={{color : this.props.iconColor}} ref="control" href="#" data-activates="slide-out" className="button-collapse">
       <i className="material-icons">{this.props.icon}</i>
     </a>
   </div>
  }

}

SideNav.defaultProps = {
  icon : "menu",
  iconColor : "#000"
}

export default SideNav
