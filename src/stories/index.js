import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';
import FixedActionsButton from "../components/FixedActionsButton";
import MaterialTable from "../components/MaterialTable";
import SideNav from "../components/SideNav";
import FilterForm from "../components/FilterForm";
import MaterialChip from "../components/MaterialChip";


storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));

  storiesOf('FixedActionsButton', module)
    .add('FixedActionsButton view', () => (
      <FixedActionsButton />
  ));

  storiesOf('MaterialTable', module)
    .add('MaterialTable view no sorting', () => {
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
      return <MaterialTable rows={table.rows} columns={table.columns} />
  }).add('MaterialTable sort asc name', () => {
    const table = {
        columns : [
            {
              title : "Name",
              id : "id",
              sortOrder : "ASC"
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
             id : "Alan",
             name : "Jellybean",
             price : "$3.76"
          },
           {
              id : "Alvin",
              name : "Eclair",
              price : "$0.87"
           },
           {
              id : "Jonathan",
              name : "Lollipop",
              price : "$7.00"
           }
        ]
    }
    return <MaterialTable  onClickSort={action('sorting')} rows={table.rows} columns={table.columns} />
});

  storiesOf('SideNav', module)
  .add('Side nav', () => (
    <SideNav icon='filter_list'><FilterForm/></SideNav>
  ));

  storiesOf('MaterialChip', module)
  .add('Material Chip default', () => (
    <MaterialChip>Text</MaterialChip>
  ))
  .add('Material Chip closable', () => (
    <MaterialChip data={{id:'id', value:'value'}} onClickClose={action('close chip')} isClosable={true}>Chip text</MaterialChip>
  ));
