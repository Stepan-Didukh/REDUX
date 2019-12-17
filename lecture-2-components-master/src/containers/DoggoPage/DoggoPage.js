import React, { Component } from 'react';
import { withRouter } from "react-router";

//import './HomePage.scss';

const CN = 'doggo-page';

class DoggoPage extends Component {

  render() {
    debugger;

    return (
      <div className={`${CN}`}>
        Here would be your doggo
        <div className={`${CN}__container`}>

        </div>
      </div>
    );
  }
}

export default withRouter(DoggoPage);
