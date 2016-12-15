import React, { Component } from 'react';
import "materialize-css/dist/css/materialize.css";

class MaterialTable extends Component{

  constructor(props){
    super(props);
    this.mapHeader = this.mapHeader.bind(this);
    this.mapRow = this.mapRow.bind(this);
  }

  mapHeader(column, index){
    return <th key={index}>{column.title}</th>
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
    return <table>
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
