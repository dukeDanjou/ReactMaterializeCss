import React , {Component} from "react"
import "materialize-css/dist/css/materialize.css";
import "material-design-icons/iconfont/material-icons.css";

class MaterialChip extends Component{

  constructor(props){
     super(props);
     this.onClose = this.onClose.bind(this);
  }

  onClose(){
     this.props.onClickClose(this.props.data);
  }

  render (){
     return <div className="chip">{this.props.children}
                {this.props.isClosable ? <i onClick={this.onClose} className="close material-icons">close</i> : null}
            </div>
  }
}

MaterialChip.defaultProps = {
  isClosable : false
}

MaterialChip.PropTypes = {
  isClosable : React.PropTypes.boolean,
  onClickClose : React.PropTypes.func
}

export default MaterialChip
