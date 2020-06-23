import React from 'react';
import Table from 'react-bootstrap/Table';

const CustomerTable = (props) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Email</th>
          <th>Name</th>
          <th>Active?</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>


        {props.customers.map((customer, index) => {
          return (
            <tr>
              <td>{props.customers[index].id}</td>
              <td>{props.customers[index].email}</td>
              <td>{props.customers[index].name}</td>
              <td>{props.customers[index].active}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  );
}

export default CustomerTable;
