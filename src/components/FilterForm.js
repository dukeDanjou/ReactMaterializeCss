import React, {Component} from "react"

class FilterForm extends Component {

    render(){
       return <div className="row">
                <div className="input-field col s12">
                  <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
                  <label className="active" htmlFor="first_name">Input first name</label>
                </div>
              </div>
    }
}

export default FilterForm
