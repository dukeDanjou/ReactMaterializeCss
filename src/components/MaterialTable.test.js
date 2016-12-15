import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import MaterialTable from './MaterialTable';

const table = {
    columns : [
        {
          title : "Name",
          id : "id"
        },
        {
          title : "Item Name",
          id : "name"
        },
        {
          title : "Item price",
          id : "price"
        }
    ],
    rows : [
       {
          id : "Alvin",
          name : "Eclair",
          price : "$0.87"
       },
       {
          id : "Alan",
          name : "Jellybean",
          price : "$3.76"
       },
       {
          id : "Jonathan",
          name : "Lollipop",
          price : "$7.00"
       }
    ]
}

it('renders without crashing', () => {
  shallow(<MaterialTable columns={table.columns} rows={table.rows}/>);
});
