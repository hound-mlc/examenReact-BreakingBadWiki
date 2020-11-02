import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

export class CharPortrait extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card style={{ width: "350px", backgroundColor: "#0C5533" }}>
        <Card.Body>
          <Card.Text>{this.props.children}</Card.Text>
        </Card.Body>
        <Card.Img
          style={{ height: "450px" }}
          variant="bottom"
          src={this.props.image}
        />
      </Card>
    );
  }
}
