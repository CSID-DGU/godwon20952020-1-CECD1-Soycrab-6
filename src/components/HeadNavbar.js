import React from 'react';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { IoIosInformationCircleOutline } from 'react-icons/io';

const logoStyle = {
  width: 100,
  marginRight: 10,
  paddingBottom: 5,
}

const helpIcon = {
  width: '2em',
  height: '2em',
}

function HeadNavbar() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <img src={ require('../images/sparrow_logo.png') } style={logoStyle} alt="sparrow logo" />
        <Navbar.Brand href="#home">소스코드 결함탐지</Navbar.Brand>
        <Nav className="mr-auto">

        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="노드 이름으로 찾기..." className="mr-sm-2" />
          <Button variant="outline-info" className="mr-sm-2">검색</Button>
          <IoIosInformationCircleOutline style={helpIcon} onClick={() => console.log('help')}></IoIosInformationCircleOutline>
        </Form>
      </Navbar>
    </>
  )
}

export default React.memo(HeadNavbar);
