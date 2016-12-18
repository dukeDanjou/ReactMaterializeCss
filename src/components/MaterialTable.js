import React, { Component } from 'react';
import "materialize-css/dist/css/materialize.css";
import "material-design-icons/iconfont/material-icons.css";

class MaterialTable extends Component{

  constructor(props){
    super(props);
    this.mapHeader = this.mapHeader.bind(this);
    this.mapRow = this.mapRow.bind(this);
  }

  mapHeader(column, index){
    let iconSort = column.sortOrder ? column.sortOrder === "ASC" ? "arrow_drop_up" : "arrow_drop_down" : "sort";
    return <th key={index}>{column.title}<i style={{float:"right", cursor: "pointer"}} className="material-icons">{iconSort}</i></th>
  }

  mapRow(row, index){
    return <tr key={index}>
      {
        this.props.columns.map(
          (header, i) => {
            return <td key={i}>{row[header.id]}</td>
          }
      )
    }
    </tr>
  }

  render(){
    return <table className="highlight">
              <thead>
                <tr>
                    {this.props.columns.map(this.mapHeader)}
                </tr>
              </thead>
              <tbody>
                    {this.props.rows.map(this.mapRow)}
              </tbody>
           </table>
  }
}
export default MaterialTable
