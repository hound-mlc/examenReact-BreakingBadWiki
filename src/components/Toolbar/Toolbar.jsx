import './Toolbar.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import propTypes from 'prop-types';

const routes = [
  {
    id: 1,
    path: '/home',
    name: 'Home',
  },
  {
    id: 2,
    path: '/seasons',
    name: 'Seasons',
  },
  {
    id: 3,
    path: '/characters',
    name: 'Characters',
  },
  {
    id: 4,
    path: '/assassins',
    name: 'Assassins',
  },
];

export const Toolbar = ({ value, setValue }) => {
  const handleChange = () => {
    setValue({ activated: !value.activated });
  };

  const [searchValue, setSearchValue] = useState();

  const history = useHistory();

  const searchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  const formSubmit = () => {
    if (searchValue.length === 0) alert('Cant search with empty values');
    else history.push(`/search?q=${searchValue}`);
  };

  return (
    <Navbar className="bbColor" variant="dark">
      <Navbar.Brand to="/home">Breaking Bad Wiki</Navbar.Brand>
      <Nav className="mr-auto">
        {routes.map((route) => (
          <Nav.Link
            as={NavLink}
            to={route.path}
            activeClassName="active"
            key={route.id}
          >
            {route.name}
          </Nav.Link>
        ))}
      </Nav>
      <Form inline>
        <Form.Check
          type="switch"
          checked={value.activated}
          onChange={handleChange}
          id="custom-switch"
          label="Anti Spoiler Mode"
        />
      </Form>
      &nbsp; &nbsp;
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search"
          onChange={searchValueChange}
          className="mr-sm-2"
        />
        <Button variant="outline-success" onClick={formSubmit}>
          Search
        </Button>
      </Form>
    </Navbar>
  );
};

Toolbar.propTypes = {
  value: propTypes.object.isRequired,
  setValue: propTypes.func.isRequired,
};
