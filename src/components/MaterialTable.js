import React, { Component } from 'react';
import "materialize-css/dist/css/materialize.css";
import "material-design-icons/iconfont/material-icons.css";

class MaterialTable extends Component{

  constructor(props){
    super(props);
    this.mapHeader = this.mapHeader.bind(this);
    this.mapRow = this.mapRow.bind(this);
    this.onSort = this.onSort.bind(this);
  }

  onSort(event, column){
    event.preventDefault();
    this.props.onClickSort(column);
  }

  mapHeader(column, index){

    let iconSort, sortButton  = null;

    if(this.props.onClickSort){
      iconSort = column.sortOrder ? column.sortOrder === "ASC" ? "arrow_drop_up" : "arrow_drop_down" : "sort";
      sortButton = <i onClick={(e) => this.onSort(e, column)} style={{float:"right", cursor: "pointer"}} className="material-icons">{iconSort}</i>
    }
    return <th key={index}>{column.title}{sortButton}</th>
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
