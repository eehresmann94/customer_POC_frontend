import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import CustomerTable from "./Components/CustomerTable"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [customer, setCustomers] = React.useState();

  React.useEffect( () =>{
    axios.get('http://localhost:9543/customers')
      .then(res =>{
        setCustomers(res.data);
        console.log(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  }, []);
  return (  
    <Container>
      <Row>
        <Col></Col>
        <Col xs={10} s={10} md={10} lg={10}>
          {customer && <CustomerTable customers={customer} />}
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default App;
